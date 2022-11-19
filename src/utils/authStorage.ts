import { LocalStorageKey } from "@/constants";
import { AuthModel } from "@/types/auth";

export const setAuthToStorage = (data: AuthModel): void => {
  localStorage.setItem(LocalStorageKey.Token, data.token);
};

export const getAuthFromStorage = (): AuthModel => {
  return {
    token: localStorage.getItem(LocalStorageKey.Token) || "",
  };
};

export const removeAuthFromStorage = (): void => {
  localStorage.removeItem(LocalStorageKey.Token);
};
