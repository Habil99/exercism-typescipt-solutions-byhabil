/**
 * * URL: https://exercism.org/tracks/typescript/exercises/resistor-color-duo/edit
 */

// Solution #1
import { Colors } from "./enums";

export function decodedValue(colors: Array<keyof typeof Colors>): number {
  let result: string = "";
  colors.slice(0, 2).map((color) => {
    result += Colors[color];
  });

  return Number(result);
}

// console.log(decodedValue(["black", "violet", "brown"]));

// Solution #2

export class ResistorColor {
  private static COLOR_VALUES = [
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
  ];

  constructor(private readonly colors: string[]) {
    if (colors.length < 2)
      console.log("At least two colors need to be present");
  }

  public decodedValue(): number {
    const values = this.colors
      .slice(0, 2)
      .map((color: string) => ResistorColor.COLOR_VALUES.indexOf(color))
      .join("");

    return Number(values);
  }
}

// console.log(new ResistorColor(["black", "violet", "brown"]).decodedValue());
