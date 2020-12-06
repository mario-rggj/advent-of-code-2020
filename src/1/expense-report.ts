import InvalidExpenseReportError from './Invalid-expense-report-error';

export default class ExpenseReport {
	constructor(private readonly entries: Array<number>) {}

	calculateTwoEntries(): number {
		for (let currentIndex = 0; currentIndex < this.entries.length; currentIndex++) {
			const currentEntry = this.entries[currentIndex];
			
			for (let comparativeIndex = currentIndex + 1; comparativeIndex < this.entries.length; comparativeIndex++) {
				const 
					comparativeEntry = this.entries[comparativeIndex],
					entriesSumUpTo2020 = currentEntry + comparativeEntry === 2020;
	
				if (entriesSumUpTo2020) {
					return currentEntry * comparativeEntry;
				}
			}
		}
	
		throw new InvalidExpenseReportError;
	}

	calculateThreeEntries(): number {
		for (let firstIndex = 0; firstIndex < this.entries.length; firstIndex++) {
			const firstEntry = this.entries[firstIndex];
			
			for (let secondIndex = firstIndex + 1; secondIndex < this.entries.length; secondIndex++) {
				const secondEntry = this.entries[secondIndex];

				for (let thirdIndex = secondIndex + 1; thirdIndex < this.entries.length; thirdIndex++) {
					const 
						thirdEntry = this.entries[thirdIndex],
						entriesSumUpTo2020 = firstEntry + secondEntry + thirdEntry === 2020;
		
					if (entriesSumUpTo2020) {
						return firstEntry * secondEntry * thirdEntry;
					}
				}
			}
		}
	
		throw new InvalidExpenseReportError;
	}
}
