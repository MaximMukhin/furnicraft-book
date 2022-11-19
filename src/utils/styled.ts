import { styled as muiStyled, css } from "@mui/material";
import { StyledOptions } from "@emotion/styled";
import { SerializedStyles } from "@emotion/react";

/*
 * Обёртка над `{styled}` из `@mui/material` игнорирующая проброс пропсов в атрибуты,
 * если они начинаются с символа $.
 * Например:
 * data-id={1} пропс будет установлен на элемент как атрибут
 * $color="red" пропс не будет установлен на элемент как атрибут
 * */
export const styled = <T = {}>(
  tag: keyof JSX.IntrinsicElements,
  options?: StyledOptions<T>
) => {
  return muiStyled(tag, {
    shouldForwardProp: (propName) => {
      return !(typeof propName === "string" && propName.startsWith("$"));
    },
    ...options,
  })<T & {}>;
};

export { css };

export type { SerializedStyles };
