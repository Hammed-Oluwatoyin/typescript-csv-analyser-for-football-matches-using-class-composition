"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Summary = /** @class */ (function () {
    function Summary(Analysis, printHTML) {
        this.Analysis = Analysis;
        this.printHTML = printHTML;
    }
    Summary.prototype.buildAndPrintReport = function (matches) {
        var output = this.Analysis.run(matches);
        this.printHTML.print(output);
    };
    return Summary;
}());
exports.Summary = Summary;
