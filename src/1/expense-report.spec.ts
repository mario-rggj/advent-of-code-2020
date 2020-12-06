import InvalidExpenseReportError from './Invalid-expense-report-error';
import reportRepair from './expense-report';
import ExpenseReport from './expense-report';

describe('Expense Report', () => {

	describe('Given valid entries', () => {
		const reportEntries = [1000, 5, 1020];
		const expenseReport = new ExpenseReport(reportEntries);

		it('multiplies entries that sum up to 2020', () => {
			expect(expenseReport.calculateTwoEntries()).toBe(1020000);
		});
	});

	describe('Given invalid entries', () => {
		const reportEntries = [1000, 1000, 1000];
		const expenseReport = new ExpenseReport(reportEntries);

		it('throws invalid expense report error', () => {
			expect(() => expenseReport.calculateTwoEntries()).toThrow(InvalidExpenseReportError);
		});
	});


});