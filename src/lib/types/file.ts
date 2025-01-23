export enum TypesFile {
  AUDIO = 0,
  DOC = 1,
}

export interface FileInterface {
  name: string;
  type: TypesFile;
}
