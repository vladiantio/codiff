import { createSignal, For } from "solid-js";
import { readFile } from "./utils/files";
import { DiffEditor } from "./components/DiffEditor";
import { languages } from "./constants/languages";
import { ArrowUpRight, Eraser, GitHub } from "./icons";
import { DropZone } from "./components/DropZone";

function App() {
  const [originalCode, setOriginalCode] = createSignal('');
  const [modifiedCode, setModifiedCode] = createSignal('');

  const [languageName, setLanguageName] = createSignal('text/plain');

  const handleChangeFile = async (number: number, file: File) => {
    const content = await readFile(file);
    if (!content) return;

    let languageDetected = languages.find(lang => lang.filePattern && new RegExp(lang.filePattern + '$').test(file.name));
    if (!languageDetected)
      languageDetected = languages.find(lang => lang.contentPattern && new RegExp('^' + lang.contentPattern).test(content));
    setLanguageName(languageDetected?.name ?? 'text/plain');
    if (number == 1) {
      setOriginalCode(content);
    } else {
      setModifiedCode(content);
    }
  };

  const clear = () => {
    setLanguageName('text/plain');
    setOriginalCode('');
    setModifiedCode('');
  };

  return (
    <>
      <div class="grid min-h-dvh [grid-template-rows:auto_1fr] gap-3 p-3">
        <nav class="flex items-center gap-4">
          <div class="flex items-center gap-2">
            <img class="size-8" src="icon.svg" />
            <h1 class="font-medium">codiff</h1>
          </div>
          <select class="form-select" onInput={(ev) => setLanguageName(ev.currentTarget.value)} value={languageName()}>
            <For each={languages}>
              {lang => (
                <option value={lang.name}>{lang.title}</option>
              )}
            </For>
          </select>
          <div class="flex-grow" />
          <button class="px-3 py-1 rounded-full border border-neutral-400 flex items-center" type="button" onClick={() => clear()}>
            <Eraser class="size-5" />
            <span class="ml-2">Clear</span>
          </button>
          <a class="px-3 py-1 rounded-full border border-neutral-100 bg-neutral-100 text-neutral-900 flex items-center" href="https://github.com/vladiantio/codiff" rel="noopener noreferrer" target="_blank" title="GitHub">
            <GitHub class="size-5" />
            <span class="ml-2">Star</span>
            <ArrowUpRight class="size-[1em] text-neutral-500" />
          </a>
        </nav>
        <DiffEditor
          class="overflow-hidden rounded-lg shadow-md"
          language={languageName()}
          originalCode={originalCode()}
          modifiedCode={modifiedCode()}
          onUpdateOriginalCode={code => setOriginalCode(code)}
          onUpdateModifiedCode={code => setModifiedCode(code)}
        />
      </div>
      <DropZone
        onChangeOriginalFile={file => handleChangeFile(1, file)}
        onChangeModifiedFile={file => handleChangeFile(2, file)}
      />
    </>
  )
}

export default App
