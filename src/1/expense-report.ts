import InvalidExpenseReportError from './Invalid-expense-report-error';

export default class ExpenseReport {
	constructor(private readonly entries: Array<number>) {}

	calculateTwoEntries(): number {
		for (let currentIndex = 0; currentIndex < this.entries.length; currentIndex++) {
			const currentEntry = this.entries[currentIndex];
			
			for (let comparativeIndex = currentIndex + 1; comparativeIndex < this.entries.length; comparativeIndex++) {
				const 
					comparativeEntry = this.entries[comparativeIndex],
					indexesAreDifferent = currentIndex !== comparativeIndex,
					entriesSumUpTo2020 = currentEntry + comparativeEntry === 2020;
	
				if (indexesAreDifferent && entriesSumUpTo2020) {
					return currentEntry * comparativeEntry;
				}
			}
		}
	
		throw new InvalidExpenseReportError;
	}
}
