import { Component, createSignal, onMount } from "solid-js";
import { getFilesDropped } from "../utils/files";

interface Props {
  onChangeOriginalFile?: (file: File) => void;
  onChangeModifiedFile?: (file: File) => void;
}

export const DropZone: Component<Props> = (props) => {
  const [show, setShow] = createSignal(false);
  const [isDraggingOriginalCode, setIsDraggingOriginalCode] = createSignal(false);
  const [isDraggingModifiedCode, setIsDraggingModifiedCode] = createSignal(false);

  onMount(() => {
    window.addEventListener('dragover', (ev: DragEvent) => {
      ev.preventDefault();
      if (ev.clientY >= 0 || ev.clientX >= 0)
        setShow(true);
    });
    window.addEventListener('dragleave', (ev: DragEvent) => {
      if (ev.clientY <= 0 || ev.clientX <= 0 || (ev.clientX >= window.innerWidth || ev.clientY >= window.innerHeight))
        setShow(false);
    });
  });

  const handleDragOverOriginalCode = (ev: DragEvent) => {
    ev.preventDefault();
    setIsDraggingOriginalCode(true);
  };
  const handleDragLeaveOriginalCode = () => {
    setIsDraggingOriginalCode(false);
  };
  const handleDragOverModifiedCode = (ev: DragEvent) => {
    ev.preventDefault();
    setIsDraggingModifiedCode(true);
  };
  const handleDragLeaveModifiedCode = () => {
    setIsDraggingModifiedCode(false);
  };

  const handleDropOriginalCode = async (ev: DragEvent) => {
    ev.preventDefault();
    const files = getFilesDropped(ev);
    if (files && files.length > 0 && props.onChangeOriginalFile) {
      props.onChangeOriginalFile(files[0]);
      if (files.length > 1 && props.onChangeModifiedFile)
        props.onChangeModifiedFile(files[1]);
    }
    setIsDraggingOriginalCode(false);
    setShow(false);
  };
  const handleDropModifiedCode = async (ev: DragEvent) => {
    ev.preventDefault();
    const files = getFilesDropped(ev);
    if (files && files.length > 0 && props.onChangeModifiedFile) {
      props.onChangeModifiedFile(files[0]);
      if (files.length > 1 && props.onChangeOriginalFile)
        props.onChangeOriginalFile(files[1]);
    }
    setIsDraggingModifiedCode(false);
    setShow(false);
  };

  return (
    <div class={`absolute top-0 left-0 size-full grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 ${show() ? '' : 'hidden'}`}>
      <div
        class={`bg-blue-500/60 rounded-lg grid place-content-center text-8xl font-bold transition ${isDraggingOriginalCode() ? '' : 'opacity-50 scale-95'}`}
        ondragover={handleDragOverOriginalCode}
        ondragleave={handleDragLeaveOriginalCode}
        ondrop={handleDropOriginalCode}
      >1</div>
      <div
        class={`bg-blue-500/60 rounded-lg grid place-content-center text-8xl font-bold transition ${isDraggingModifiedCode() ? '' : 'opacity-50 scale-95'}`}
        ondragover={handleDragOverModifiedCode}
        ondragleave={handleDragLeaveModifiedCode}
        ondrop={handleDropModifiedCode}
      >2</div>
    </div>
  );
};