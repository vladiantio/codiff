import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker';
import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker';
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';
import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';
import { Component, createEffect, createSignal, on, onCleanup, onMount } from 'solid-js';
import { editor } from 'monaco-editor';

if (!window.MonacoEnvironment)
  window.MonacoEnvironment = {
    getWorker(_, label: string) {
      switch (label) {
        case 'html':
          return new htmlWorker();
        case 'css':
          return new cssWorker();
        case 'json':
          return new jsonWorker();
        case 'typescript':
        case 'javascript':
          return new tsWorker();
        default:
          return new editorWorker();
      }
    },
  };

interface Props {
  originalCode?: string;
  modifiedCode?: string;
  class?: string;
  language?: string;
  onUpdateOriginalCode?: (code: string) => void;
  onUpdateModifiedCode?: (code: string) => void;
}

export const DiffEditor: Component<Props> = (props) => {
  const originalCode = () => props.originalCode ?? '';
  const modifiedCode = () => props.modifiedCode ?? '';
  const language = () => props.language ?? 'text/plain';
  const [currentLanguage, setCurrentLanguage] = createSignal('text/plain');
  const [isUpdatingOriginalCode, setIsUpdatingOriginalCode] = createSignal(false);
  const [isUpdatingModifiedCode, setIsUpdatingModifiedCode] = createSignal(false);
  let editorHtml: HTMLElement | undefined;
  let originalModel: editor.ITextModel | null;
  let modifiedModel: editor.ITextModel | null;
  let diffEditor: editor.IStandaloneDiffEditor | null;

  onMount(() => {
    if (!editorHtml) return;

    editor.setTheme('vs-dark');

    originalModel = editor.createModel(originalCode(), undefined);
    modifiedModel = editor.createModel(modifiedCode(), undefined);

    diffEditor = editor.createDiffEditor(
      editorHtml,
      {
        automaticLayout: true,
        originalEditable: true,
      }
    );
    diffEditor.setModel({
      original: originalModel,
      modified: modifiedModel,
    });

    originalModel.onDidChangeContent(() => {
      if (!originalModel || !props.onUpdateOriginalCode || isUpdatingOriginalCode()) return;
      setIsUpdatingOriginalCode(true);
      props.onUpdateOriginalCode(originalModel.getValue());
      setIsUpdatingOriginalCode(false);
    });

    modifiedModel.onDidChangeContent(() => {
      if (!modifiedModel || !props.onUpdateModifiedCode || isUpdatingModifiedCode()) return;
      setIsUpdatingModifiedCode(true);
      props.onUpdateModifiedCode(modifiedModel.getValue());
      setIsUpdatingModifiedCode(false);
    });
  });

  onCleanup(() => {
    diffEditor!.dispose();
  });

  createEffect(
    on(language, (value) => {
      if (value == currentLanguage()) return;
      editor.setModelLanguage(originalModel!, value);
      editor.setModelLanguage(modifiedModel!, value);
      setCurrentLanguage(value);
    }, { defer: true })
  )

  createEffect(
    on(originalCode, (value) => {
      if (!originalModel || isUpdatingOriginalCode()) return;
      setIsUpdatingOriginalCode(true);
      originalModel.setValue(value);
      setIsUpdatingOriginalCode(false);
    }, { defer: true })
  );

  createEffect(
    on(modifiedCode, (value) => {
      if (!modifiedModel || isUpdatingModifiedCode()) return;
      setIsUpdatingModifiedCode(true);
      modifiedModel.setValue(value);
      setIsUpdatingModifiedCode(false);
    }, { defer: true })
  );

  return <div class={`${props.class}`} ref={editorHtml as HTMLDivElement}></div>
}