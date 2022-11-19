export const CONFIG = {
  APP_NAME: "nocra",
};

export const MODE = (import.meta.env.MODE || "development") as
  | "development"
  | "production";

export const API_HOST = import.meta.env.API_HOST;

export enum LocalStorageKey {
  Theme = "theme",
  Token = "token",
}

export enum ColorScheme {
  Light = "light",
  Dark = "dark",
}
