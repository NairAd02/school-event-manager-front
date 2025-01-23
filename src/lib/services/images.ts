"use server";

import { Image } from "../types/image";

const imagesPath = "ponencias_images/";

export const getPaperImages = async (paperId: string): Promise<Image[]> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}${imagesPath}ponencia/${paperId}/`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    console.log(response);
    throw new Error("Error fetching paper images");
  }

  return await response.json();
};
