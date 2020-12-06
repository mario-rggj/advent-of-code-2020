import InvalidExpenseReportError from './Invalid-expense-report-error';
import reportRepair from './report-repair';

describe('Report Repair', () => {

	describe('Given valid expense report', () => {
		const expenseReport = [1000, 5, 1020];

		it('multiplies entries that sum up to 2020', () => {
			expect(reportRepair(expenseReport)).toBe(1020000);
		});
	});

	describe('Given invalid expense report', () => {
		const expenseReport = [1000, 1000, 1000];

		it('throws invalid expense report error', () => {
			expect(() => reportRepair(expenseReport)).toThrow(InvalidExpenseReportError);
		});
	});


});