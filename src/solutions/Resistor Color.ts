/**
 * * URL: https://exercism.org/tracks/typescript/exercises/resistor-color/edit
 */

import { Colors } from "../enums";

type SingleColorType = keyof typeof Colors;
type ColorsArrayType = Array<SingleColorType>;

export const colorCode = (color: SingleColorType | typeof Colors) => {
  if (typeof color !== "object") {
    return Colors[color].valueOf();
  }
  return Object.values(Colors)
    .filter((clr) => typeof clr === "string")
    .map((clr) => clr as string);
};

console.log(colorCode("black"), 0);
console.log(colorCode("orange"), 3);
console.log(colorCode("white"), 9);

console.log(colorCode(Colors), [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
]);
