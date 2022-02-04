/**
 * * URL: https://exercism.org/tracks/typescript/exercises/leap/edit
 */

export function isLeap(year: number) {
  // * Solution #1
  // return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);

  // * Solution #2
  return new Date(year, 1, 29).getDate() === 29;
}

console.log(isLeap(2015), false);
console.log(isLeap(1970), false);
console.log(isLeap(1996), false);
console.log(isLeap(1960), true);
console.log(isLeap(2100), false);
console.log(isLeap(2000), true);
