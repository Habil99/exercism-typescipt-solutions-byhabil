/**
 * * URL: https://exercism.org/tracks/typescript/exercises/two-fer/edit
 */

// Solution #1
import { Name } from "../enums";

export function twoFer(name?: keyof typeof Name): string {
  return `One for ${name || "you"}, one for me.`;
}

// console.log(twoFer("Alice"));

// Solution #2
class TwoFer {
  static twoFer(name?: string) {
    return `One for ${name || "you"}, one for me.`;
  }
}

console.log(TwoFer.twoFer());
