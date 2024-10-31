import { Component, createEffect, createSignal, on, onCleanup, onMount } from 'solid-js';
import { editor } from 'monaco-editor/esm/vs/editor/editor.api.js';

interface Props {
  original?: string;
  modified?: string;
  class?: string;
  language?: string;
  onUpdateOriginal?: (code: string) => void;
  onUpdateModified?: (code: string) => void;
}

export const DiffEditor: Component<Props> = (props) => {
  const original = () => props.original ?? '';
  const modified = () => props.modified ?? '';
  const language = () => props.language ?? 'text/plain';
  const [currentLanguage, setCurrentLanguage] = createSignal('text/plain');
  const [isUpdatingOriginal, setIsUpdatingOriginal] = createSignal(false);
  const [isUpdatingModified, setIsUpdatingModified] = createSignal(false);
  let editorHtml: HTMLElement | undefined;
  let originalModel: editor.ITextModel | null;
  let modifiedModel: editor.ITextModel | null;
  let diffEditor: editor.IStandaloneDiffEditor | null;

  onMount(async () => {
    if (!editorHtml) return;

    originalModel = editor.createModel(original(), undefined);
    modifiedModel = editor.createModel(modified(), undefined);

    diffEditor = editor.createDiffEditor(
      editorHtml,
      {
        automaticLayout: true,
        originalEditable: true,
        wordWrap: 'on',
        suggest: {
          showFields: false,
          showFunctions: false,
        }
      }
    );
    diffEditor.setModel({
      original: originalModel,
      modified: modifiedModel,
    });

    originalModel.onDidChangeContent(() => {
      if (!originalModel || !props.onUpdateOriginal || isUpdatingOriginal()) return;
      setIsUpdatingOriginal(true);
      props.onUpdateOriginal(originalModel.getValue());
      setIsUpdatingOriginal(false);
    });

    modifiedModel.onDidChangeContent(() => {
      if (!modifiedModel || !props.onUpdateModified || isUpdatingModified()) return;
      setIsUpdatingModified(true);
      props.onUpdateModified(modifiedModel.getValue());
      setIsUpdatingModified(false);
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
    on(original, (value) => {
      if (!originalModel || isUpdatingOriginal()) return;
      setIsUpdatingOriginal(true);
      originalModel.setValue(value);
      setIsUpdatingOriginal(false);
    }, { defer: true })
  );

  createEffect(
    on(modified, (value) => {
      if (!modifiedModel || isUpdatingModified()) return;
      setIsUpdatingModified(true);
      modifiedModel.setValue(value);
      setIsUpdatingModified(false);
    }, { defer: true })
  );

  return <div class={`${props.class}`} ref={editorHtml as HTMLDivElement}></div>
}