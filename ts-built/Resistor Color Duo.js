"use strict";
/**
 * * URL: https://exercism.org/tracks/typescript/exercises/resistor-color-duo/edit
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResistorColor = exports.decodedValue = void 0;
// Solution #1
var enums_1 = require("./enums");
function decodedValue(colors) {
    var result = "";
    colors.slice(0, 2).map(function (color) {
        result += enums_1.Colors[color];
    });
    return Number(result);
}
exports.decodedValue = decodedValue;
// console.log(decodedValue(["black", "violet", "brown"]));
// Solution #2
var ResistorColor = /** @class */ (function () {
    function ResistorColor(colors) {
        this.colors = colors;
        if (colors.length < 2)
            console.log("At least two colors need to be present");
    }
    ResistorColor.prototype.decodedValue = function () {
        var values = this.colors
            .slice(0, 2)
            .map(function (color) { return ResistorColor.COLOR_VALUES.indexOf(color); })
            .join("");
        return Number(values);
    };
    ResistorColor.COLOR_VALUES = [
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
    return ResistorColor;
}());
exports.ResistorColor = ResistorColor;
// console.log(new ResistorColor(["black", "violet", "brown"]).decodedValue());
