export enum Errors {
  NOT_FOUND = 404,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
}

export interface Error {
  status: Errors;
  message: string;
}
