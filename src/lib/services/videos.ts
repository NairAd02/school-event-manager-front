"use server";

import { Video } from "../types/video";

const videosPath = "ponencias_videos/";

export const getPaperVideos = async (paperId: string): Promise<Video[]> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}${videosPath}ponencia/${paperId}/`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    console.log(response);
    throw new Error("Error fetching paper videos");
  }

  return await response.json();
};
