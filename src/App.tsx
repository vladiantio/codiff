import { createSignal, For } from "solid-js";
import { readFile } from "./utils/files";
import { DiffEditor } from "./components/DiffEditor";
import { languages } from "./constants/languages";
import { Eraser } from "lucide-solid";
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
      <div class="grid min-h-dvh [grid-template-rows:1fr_auto] gap-2 p-2">
        <DiffEditor
          class="overflow-hidden rounded-lg shadow-md"
          language={languageName()}
          originalCode={originalCode()}
          modifiedCode={modifiedCode()}
          onUpdateOriginalCode={code => setOriginalCode(code)}
          onUpdateModifiedCode={code => setModifiedCode(code)}
        />
        <div class="flex items-center justify-between gap-4">
          <select class="form-select" onInput={(ev) => setLanguageName(ev.currentTarget.value)} value={languageName()}>
            <For each={languages}>
              {lang => (
                <option value={lang.name}>{lang.title}</option>
              )}
            </For>
          </select>
          <button type="button" title="Clear" onClick={() => clear()}>
            <Eraser />
          </button>
        </div>
      </div>
      <DropZone
        onChangeOriginalFile={file => handleChangeFile(1, file)}
        onChangeModifiedFile={file => handleChangeFile(2, file)}
      />
    </>
  )
}

export default App
