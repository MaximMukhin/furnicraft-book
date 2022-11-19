import { AtomEffect } from "recoil";

interface LocalStorageSyncAtomEffect {
  <T>(options?: { key?: string; defaultValue?: T }): AtomEffect<T>;
}

export const localStorageSyncAtomEffect: LocalStorageSyncAtomEffect =
  (options) => (param) => {
    const { key, defaultValue } = options ?? {};

    const { setSelf, onSet, node } = param;

    const currentKey = key ?? node.key;

    const storedValue = localStorage.getItem(currentKey);

    if (!storedValue && defaultValue) {
      localStorage.setItem(currentKey, JSON.stringify(defaultValue));
    }

    if (storedValue) {
      setSelf(JSON.parse(storedValue));
    }

    onSet((value: unknown, _, isReset) => {
      if (isReset) {
        localStorage.removeItem(currentKey);
        return;
      }

      localStorage.setItem(currentKey, JSON.stringify(value));
    });
  };
