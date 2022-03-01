"use strict";
/**
 * * URL: https://exercism.org/tracks/typescript/exercises/resistor-color/edit
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.colorCode = void 0;
var enums_1 = require("../enums");
var colorCode = function (color) {
    if (typeof color !== "object") {
        return enums_1.Colors[color].valueOf();
    }
    return Object.values(enums_1.Colors)
        .filter(function (clr) { return typeof clr === "string"; })
        .map(function (clr) { return clr; });
};
exports.colorCode = colorCode;
console.log((0, exports.colorCode)("black"), 0);
console.log((0, exports.colorCode)("orange"), 3);
console.log((0, exports.colorCode)("white"), 9);
console.log((0, exports.colorCode)(enums_1.Colors), [
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
