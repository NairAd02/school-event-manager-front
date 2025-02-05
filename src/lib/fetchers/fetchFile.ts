"use server";
export const fetchFile = async (fileUrl: string): Promise<ArrayBuffer> => {
  const response = await fetch(fileUrl);

  if (!response.ok) {
    console.log(response);
    throw new Error("Error in fetching file");
  }
  const arrayBuffer = await response.arrayBuffer();

  return arrayBuffer;
};

export const fetchFileBase64 = async (fileUrl: string): Promise<string> => {
  const response = await fetch(fileUrl);

  if (!response.ok) {
    console.log(response);
    throw new Error("Error in fetching file");
  }

  const arrayBuffer = await response.arrayBuffer();
  const base64String = Buffer.from(arrayBuffer).toString("base64");

  return `data:audio/mpeg;base64,${base64String}`;
};
