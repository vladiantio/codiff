import { createSignal, For } from "solid-js";
import { readFile } from "./utils/files";
import { DiffEditor } from "./components/DiffEditor";
import { defaultLanguage, languages } from "./constants/languages";
import { ArrowLeftRight, ArrowUpRight, Eraser, GitHub } from "./icons";
import { DropZone } from "./components/DropZone";
import { translate } from "./i18n";

function App() {
  const [originalName, setOriginalName] = createSignal('Version 1');
  const [modifiedName, setModifiedName] = createSignal('Version 2');
  const [original, setOriginal] = createSignal('');
  const [modified, setModified] = createSignal('');

  const [languageName, setLanguageName] = createSignal(defaultLanguage);

  const handleChangeFile = async (number: number, file: File) => {
    const content = await readFile(file);
    if (!content) return;

    let languageDetected = languages.find(lang => lang.filePattern && new RegExp(lang.filePattern + '$').test(file.name));
    if (!languageDetected)
      languageDetected = languages.find(lang => lang.contentPattern && new RegExp('^' + lang.contentPattern).test(content));
    setLanguageName(languageDetected?.name ?? defaultLanguage);
    if (number == 1) {
      setOriginal(content);
      setOriginalName(file.name);
    } else {
      setModified(content);
      setModifiedName(file.name);
    }
  };

  const clear = () => {
    setLanguageName(defaultLanguage);
    setOriginal('');
    setOriginalName('Version 1');
    setModified('');
    setModifiedName('Version 2');
  };

  const switchText = () => {
    const tempOriginal = original();
    const tempOriginalName = originalName();
    const tempModified = modified();
    const tempModifiedName = modifiedName();
    setOriginal(tempModified);
    setOriginalName(tempModifiedName);
    setModified(tempOriginal);
    setModifiedName(tempOriginalName);
  };

  return (
    <>
      <div class="grid min-h-dvh [grid-template-rows:auto_1fr] gap-3 p-3">
        <nav class="flex items-center gap-3">
          <div class="inline-flex items-center gap-2">
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
          <button class="btn" type="button" onClick={() => switchText()}>
            <ArrowLeftRight class="size-5" />
            <span class="ml-2">{translate('switchText')}</span>
          </button>
          <div class="flex-grow" />
          <button class="btn" type="button" onClick={() => clear()}>
            <Eraser class="size-5" />
            <span class="ml-2">{translate('clear')}</span>
          </button>
          <a class="px-3 py-1 text-sm rounded-full border font-medium border-neutral-100 bg-neutral-100 text-neutral-900 inline-flex items-center" href="https://github.com/vladiantio/codiff" rel="noopener noreferrer" target="_blank" title="GitHub">
            <GitHub class="size-5" />
            <span class="ml-2">Star</span>
            <ArrowUpRight class="size-[1em] text-neutral-500" />
          </a>
        </nav>
        <div class="overflow-hidden rounded-lg shadow-md grid [grid-template-rows:auto_1fr]">
          <div class="hidden md:grid md:grid-cols-2">
            <input type="text" class="bg-neutral-800 py-1 text-center" value={originalName()} onchange={ev => setOriginalName(ev.target.value)} />
            <input type="text" class="bg-neutral-800 py-1 text-center" value={modifiedName()} onchange={ev => setModifiedName(ev.target.value)} />
          </div>
          <DiffEditor
            language={languageName()}
            original={original()}
            modified={modified()}
            onUpdateOriginal={code => setOriginal(code)}
            onUpdateModified={code => setModified(code)}
          />
        </div>
      </div>
      {original().length === 0 && (
        <div class={`absolute top-1/2 left-0 w-1/2 text-center italic hidden md:block`}>
          <p>{translate('placeholderVersion1')}</p>
          <p>{translate('placeholderDnD')}</p>
        </div>
      )}
      {modified().length === 0 && (
        <div class={`absolute top-1/2 left-1/2 w-1/2 text-center italic hidden md:block`}>
          <p>{translate('placeholderVersion2')}</p>
          <p>{translate('placeholderDnD')}</p>
        </div>
      )}
      <DropZone
        onChangeOriginalFile={file => handleChangeFile(1, file)}
        onChangeModifiedFile={file => handleChangeFile(2, file)}
      />
    </>
  )
}

export default App
