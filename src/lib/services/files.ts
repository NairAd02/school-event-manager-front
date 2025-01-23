import JSZip from "jszip";
import { saveAs } from "file-saver";
import { fetchFile } from "../fetchers/fetchFile";
import { FileInterface, TypesFile } from "../types/file";
export async function downloadZip(nameZip: string, files: FileInterface[]) {
  const zip = new JSZip();
  await Promise.all(
    files.map(async (file) => {
      zip.file(file.name + (file.type === TypesFile.DOC ? ".docx" : ".mp3") , await fetchFile(file.name));
    })
  );
  const zipBlob = await zip.generateAsync({ type: "blob" });
  saveAs(zipBlob, nameZip + ".zip");
}
