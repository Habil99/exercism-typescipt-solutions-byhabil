"use strict";
/**
 * * URL: https://exercism.org/tracks/typescript/exercises/resistor-color-trio/edit
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodedResistorValue = void 0;
var enums_1 = require("../enums");
var ResistorColorTrio = /** @class */ (function () {
    function ResistorColorTrio(colors) {
        this.colors = colors;
    }
    ResistorColorTrio.prototype.decodedVale = function () {
        var resistors = this.getTwoResistors();
        for (var i = 0; i < enums_1.Colors[this.colors[2]].valueOf(); i += 1) {
            resistors += "0";
        }
        if (this.biggerThanThousand(resistors)) {
            return resistors.slice(0, resistors.length - 3) + " kiloohms";
        }
        return resistors + " ohms";
    };
    ResistorColorTrio.prototype.getTwoResistors = function () {
        return this.colors
            .slice(0, 2)
            .map(function (color) { return enums_1.Colors[color]; })
            .join("");
    };
    ResistorColorTrio.prototype.biggerThanThousand = function (str) {
        if (str.endsWith("000")) {
            return true;
        }
        return false;
    };
    return ResistorColorTrio;
}());
console.log(new ResistorColorTrio(["blue", "grey", "brown"]).decodedVale() === "680 ohms");
console.log(new ResistorColorTrio(["red", "black", "red"]).decodedVale() === "2 kiloohms"); // 2000 -> 2 kiloohms
console.log(new ResistorColorTrio(["green", "brown", "orange"]).decodedVale() ==
    "51 kiloohms"); // 51000
console.log(new ResistorColorTrio(["yellow", "violet", "yellow"]).decodedVale() ==
    "470 kiloohms" // 470000
);
console.log(new ResistorColorTrio(["blue", "grey", "brown"]).decodedVale());
// * Solution #2
function decodedResistorValue(colors) {
    var resistors = getTwoResistors(colors);
    for (var i = 0; i < enums_1.Colors[colors[2]].valueOf(); i += 1) {
        resistors += "0";
    }
    if (biggerThanThousand(resistors)) {
        return resistors.slice(0, resistors.length - 3) + " kiloohms";
    }
    return resistors + " ohms";
}
exports.decodedResistorValue = decodedResistorValue;
function getTwoResistors(colors) {
    return colors
        .slice(0, 2)
        .map(function (color) { return enums_1.Colors[color].valueOf(); })
        .join("");
}
function biggerThanThousand(str) {
    if (str.endsWith("000")) {
        return true;
    }
    return false;
}
console.log(decodedResistorValue(["blue", "grey", "brown"]) === "680 ohms");
console.log(decodedResistorValue(["red", "black", "red"]) === "2 kiloohms"); // 2000 -> 2 kiloohms
console.log(decodedResistorValue(["green", "brown", "orange"]) == "51 kiloohms"); // 51000
console.log(decodedResistorValue(["yellow", "violet", "yellow"]) == "470 kiloohms" // 470000
);
console.log(decodedResistorValue(["blue", "grey", "brown"]));
