import InvalidExpenseReportError from './Invalid-expense-report-error';

export default function reportRepair(expenseReport: Array<number>): number {

	for (let currentIndex = 0; currentIndex < expenseReport.length; currentIndex++) {
		const currentEntry = expenseReport[currentIndex];
		
		for (let comparativeIndex = currentIndex + 1; comparativeIndex < expenseReport.length; comparativeIndex++) {
			const 
				comparativeEntry = expenseReport[comparativeIndex],
				indexesAreDifferent = currentIndex !== comparativeIndex,
				entriesSumUpTo2020 = currentEntry + comparativeEntry === 2020;

			if (indexesAreDifferent && entriesSumUpTo2020) {
				return currentEntry * comparativeEntry;
			}
		}
	}

	throw new InvalidExpenseReportError;
}
