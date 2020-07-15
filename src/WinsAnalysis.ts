import {MatchResults} from './MatchResults';
import {MatchData} from './MatchData';
import { Analyzer } from './Summary';

export class WinAnalysis implements Analyzer {


    constructor(public team:string){


    }
    run(matchData: MatchData[] ): string{

        let TeamWins = 0;

        for (let match of matchData ) {
            if(match[1] === this.team && match[5] === MatchResults.HomeWins){
                TeamWins++;
            }
            else if (match[2] === this.team && match[5] ===MatchResults.AwayWins){
                TeamWins++;
            }
        
        }
        
        console.log(`${this.team} won ${TeamWins } games`);
        return `${this.team} won ${TeamWins } games`;
        

    }


}