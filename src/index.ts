import { MatchReader } from './MatchReader';
import {MatchResults} from './MatchResults';
import {CsvFileReader} from './CsvFileReader';
import {WinAnalysis} from './WinsAnalysis';
import {Summary} from './Summary';
import {BuildHTML_Report} from './buildHTML_Report';

const firstCsvReader = new CsvFileReader('football.csv');



const firstMatchReader = new MatchReader(firstCsvReader);
firstMatchReader.load();
console.log(firstMatchReader.matches);

const firstWinAnalysis = new WinAnalysis('Man City');
firstWinAnalysis.run(firstMatchReader.matches);

const firstBuildHTML_Report = new BuildHTML_Report();

const firstSummary = new Summary(firstWinAnalysis , firstBuildHTML_Report )

firstSummary.buildAndPrintReport(firstMatchReader.matches);



