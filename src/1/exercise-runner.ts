import { ExerciseRunnerResult } from '../utils/exercise-runner-result';
import Parser from '../utils/parser';
import ExpenseReport from './expense-report';

export function run(filePath = './inputs/1.txt'): ExerciseRunnerResult {
	const parsedEntries = Parser.fromTxtToNumberArray(filePath);
	const expenseReport = new ExpenseReport(parsedEntries);
	return {
		partOne: expenseReport.calculateTwoEntries(),
		partTwo: expenseReport.calculateThreeEntries()
	};
}
