export const readFile = (file: File) => new Promise<string | undefined>((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsText(file);
  reader.onload = () => resolve(reader.result!.toString());
  reader.onerror = reject;
});

export const getFilesDropped = (ev: DragEvent) => {
  let files: File[] = [];
  if (!ev.dataTransfer) return;
  if (ev.dataTransfer.items) {
    // Use DataTransferItemList interface to access the file(s)
    [...ev.dataTransfer.items].forEach(item => {
      // If dropped items aren't files, reject them
      if (item.kind !== "file") return;
      const file = item.getAsFile();
      if (file) files.push(file);
    });
  } else {
    // Use DataTransfer interface to access the file(s)
    files = [...ev.dataTransfer.files];
  }
  return files;
};