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
