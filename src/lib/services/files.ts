import JSZip from "jszip";
import { saveAs } from "file-saver";
import { fetchFile } from "../fetchers/fetchFile";
export async function downloadZip(nameZip: string, files: string[]) {
  const zip = new JSZip();
  await Promise.all(
    files.map(async (file) => {
      zip.file(file + ".docx", await fetchFile(file));
    })
  );
  const zipBlob = await zip.generateAsync({ type: "blob" });
  saveAs(zipBlob, nameZip + ".zip");
}
