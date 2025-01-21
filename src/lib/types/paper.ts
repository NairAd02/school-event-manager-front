export interface Paper {
  nombre_ponencia: string;
  autor: string;
}

export interface PaperDetails {
  nombre_ponencia: string;
  autor: string;
  documento_original: string; // url
  audio_file: string; // url
  summary: string; // url
}
