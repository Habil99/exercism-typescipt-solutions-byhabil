"use strict";
/**
 * * URL: https://exercism.org/tracks/typescript/exercises/two-fer/edit
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.twoFer = void 0;
function twoFer(name) {
    return "One for ".concat(name || "you", ", one for me.");
}
exports.twoFer = twoFer;
// console.log(twoFer("Alice"));
// Solution #2
var TwoFer = /** @class */ (function () {
    function TwoFer() {
    }
    TwoFer.twoFer = function (name) {
        return "One for ".concat(name || "you", ", one for me.");
    };
    return TwoFer;
}());
console.log(TwoFer.twoFer());
