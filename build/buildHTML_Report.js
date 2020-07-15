"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var BuildHTML_Report = /** @class */ (function () {
    function BuildHTML_Report() {
    }
    BuildHTML_Report.prototype.print = function (output) {
        var html = "\n                    <div>\n                    <h1>Analysis Output</h1>\n                    <div>" + output + "</div>\n                    </div>";
        fs_1.default.writeFileSync('report.html', html);
    };
    return BuildHTML_Report;
}());
exports.BuildHTML_Report = BuildHTML_Report;
