/**
 * * URL: https://exercism.org/tracks/typescript/exercises/resistor-color-trio/edit
 */

import { Colors } from "../enums";

// * Solution #1
type TColor = Array<keyof typeof Colors>;

class ResistorColorTrio {
  constructor(private readonly colors: TColor) {}

  public decodedVale(): string {
    let resistors = this.getTwoResistors();

    for (let i = 0; i < Colors[this.colors[2]].valueOf(); i += 1) {
      resistors += "0";
    }

    if (this.biggerThanThousand(resistors)) {
      return resistors.slice(0, resistors.length - 3) + " kiloohms";
    }
    return resistors + " ohms";
  }

  private getTwoResistors(): string {
    return this.colors
      .slice(0, 2)
      .map((color: string) => Colors[color])
      .join("");
  }

  private biggerThanThousand(str: string): boolean {
    if (str.endsWith("000")) {
      return true;
    }
    return false;
  }
}

console.log(
  new ResistorColorTrio(["blue", "grey", "brown"]).decodedVale() === "680 ohms"
);
console.log(
  new ResistorColorTrio(["red", "black", "red"]).decodedVale() === "2 kiloohms"
); // 2000 -> 2 kiloohms
console.log(
  new ResistorColorTrio(["green", "brown", "orange"]).decodedVale() ==
    "51 kiloohms"
); // 51000
console.log(
  new ResistorColorTrio(["yellow", "violet", "yellow"]).decodedVale() ==
    "470 kiloohms" // 470000
);

console.log(new ResistorColorTrio(["blue", "grey", "brown"]).decodedVale());

// * Solution #2
export function decodedResistorValue(colors: TColor): string {
  let resistors = getTwoResistors(colors);

  for (let i = 0; i < Colors[colors[2]].valueOf(); i += 1) {
    resistors += "0";
  }

  if (biggerThanThousand(resistors)) {
    return resistors.slice(0, resistors.length - 3) + " kiloohms";
  }
  return resistors + " ohms";
}

function getTwoResistors(colors: TColor): string {
  return colors
    .slice(0, 2)
    .map((color: string) => Colors[color].valueOf())
    .join("");
}

function biggerThanThousand(str: string): boolean {
  if (str.endsWith("000")) {
    return true;
  }
  return false;
}

console.log(decodedResistorValue(["blue", "grey", "brown"]) === "680 ohms");
console.log(decodedResistorValue(["red", "black", "red"]) === "2 kiloohms"); // 2000 -> 2 kiloohms
console.log(
  decodedResistorValue(["green", "brown", "orange"]) == "51 kiloohms"
); // 51000
console.log(
  decodedResistorValue(["yellow", "violet", "yellow"]) == "470 kiloohms" // 470000
);

console.log(decodedResistorValue(["blue", "grey", "brown"]));
