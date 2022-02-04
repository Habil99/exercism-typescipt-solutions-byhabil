"use strict";
/**
 * * URL: https://exercism.org/tracks/typescript/exercises/leap/edit
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLeap = void 0;
function isLeap(year) {
    // * Solution #1
    // return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);
    // * Solution #2
    return new Date(year, 1, 29).getDate() === 29;
}
exports.isLeap = isLeap;
console.log(isLeap(2015), false);
console.log(isLeap(1970), false);
console.log(isLeap(1996), false);
console.log(isLeap(1960), true);
console.log(isLeap(2100), false);
console.log(isLeap(2000), true);
