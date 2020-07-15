import {MatchData} from './MatchData';

export interface Analyzer{
        
    run(matches:MatchData[]):string;

}

export interface printReport{
    print (output:string):void;

}



export class Summary {

constructor(public Analysis:Analyzer , public printHTML:printReport){


}

buildAndPrintReport( matches:MatchData[]){
    const output = this.Analysis.run(matches);

    this.printHTML.print(output); 
}



}