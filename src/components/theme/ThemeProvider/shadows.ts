import { Shadows } from "@mui/material/styles/shadows";

const createShadow = (multi: number) => {
  return `0 ${4 * multi}px ${4 * multi}px -${4 * multi}px #00000020,
          0 ${multi}px ${2 * multi}px -1px #00000020,
          0 0 1px 0 #00000050;`;
};

const shadows = [
  "none",
  ...new Array(24).fill("").map((el, index) => createShadow(index)),
] as Shadows;

export default shadows;
