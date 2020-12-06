import { ExerciseRunnerResult } from '../utils/exercise-runner-result';
import Parser from '../utils/Parser';
import ExpenseReport from './expense-report';

export function run(filePath = './src/1/expense-report.txt'): ExerciseRunnerResult {
	const parsedEntries = Parser.fromTxtToNumberArray(filePath);
	const expenseReport = new ExpenseReport(parsedEntries);
	return { 
		partOne: expenseReport.calculateTwoEntries(), 
		partTwo: expenseReport.calculateThreeEntries() 
	};
}