import { atom } from "recoil";

import { RecoilKey } from "@/states/RecoilKey";
import { ColorScheme } from "@/constants";
import { localStorageSyncAtomEffect } from "@/utils";

export const colorSchemeState = atom<ColorScheme>({
  key: RecoilKey.ColorSchemeState,
  default: ColorScheme.Light,
  effects: [localStorageSyncAtomEffect()],
});
