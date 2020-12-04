import Parser from '../utils/Parser';
import reportRepair from './report-repair';

export function run(filePath = './src/1/expense-report.txt'): number {
	return reportRepair(Parser.fromTxtToNumberArray(filePath));
}