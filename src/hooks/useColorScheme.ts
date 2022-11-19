import { useEffect } from "react";
import { SetterOrUpdater, useRecoilState } from "recoil";
import { useMediaQuery } from "@mui/material";

import { ColorScheme, LocalStorageKey } from "@/constants";

import { colorSchemeState } from "@/states/ui";

const useColorScheme = (): [ColorScheme, SetterOrUpdater<ColorScheme>] => {
  const [colorScheme, setColorScheme] = useRecoilState(colorSchemeState);

  const isLightSystemColorScheme = useMediaQuery(
    "(prefers-color-scheme: light)"
  );

  const systemColorScheme = isLightSystemColorScheme
    ? ColorScheme.Light
    : ColorScheme.Dark;

  useEffect(() => {
    const storageColorScheme = localStorage.getItem(LocalStorageKey.Theme);

    if (storageColorScheme === ColorScheme.Light) {
      setColorScheme(storageColorScheme);
      return;
    }

    if (storageColorScheme === ColorScheme.Dark) {
      setColorScheme(storageColorScheme);
      return;
    }

    setColorScheme(systemColorScheme);
  }, [colorScheme, systemColorScheme]);

  return [colorScheme, setColorScheme];
};

export default useColorScheme;
