import Parser from '../utils/Parser';
import ExpenseReport from './expense-report';

export function run(filePath = './src/1/expense-report.txt'): number {
	return new ExpenseReport((Parser.fromTxtToNumberArray(filePath))).calculateTwoEntries();
}