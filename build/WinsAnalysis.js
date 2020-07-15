"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchResults_1 = require("./MatchResults");
var WinAnalysis = /** @class */ (function () {
    function WinAnalysis(team) {
        this.team = team;
    }
    WinAnalysis.prototype.run = function (matchData) {
        var TeamWins = 0;
        for (var _i = 0, matchData_1 = matchData; _i < matchData_1.length; _i++) {
            var match = matchData_1[_i];
            if (match[1] === this.team && match[5] === MatchResults_1.MatchResults.HomeWins) {
                TeamWins++;
            }
            else if (match[2] === this.team && match[5] === MatchResults_1.MatchResults.AwayWins) {
                TeamWins++;
            }
        }
        console.log(this.team + " won " + TeamWins + " games");
        return this.team + " won " + TeamWins + " games";
    };
    return WinAnalysis;
}());
exports.WinAnalysis = WinAnalysis;
