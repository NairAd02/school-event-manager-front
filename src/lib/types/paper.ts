export interface Paper {
  id: number;
  evento: number;
  nombre_ponencia: string;
  autor: string;
}

export interface PaperDetails {
  id: number;
  evento: number;
  nombre_ponencia: string;
  autor: string;
  documento_original: string; // url
  audio_file: string; // url
  summary: string; // url
}
