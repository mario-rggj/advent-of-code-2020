import InvalidExpenseReportError from './Invalid-expense-report-error';
import reportRepair from './expense-report';
import ExpenseReport from './expense-report';

describe('Expense Report', () => {

	describe('Given valid entries', () => {
		const reportEntries = [1000, 5, 1020, 995];
		const expenseReport = new ExpenseReport(reportEntries);

		it('multiplies two entries that sum up to 2020', () => {
			expect(expenseReport.calculateTwoEntries()).toBe(1020000);
		});

		it('multiplies three entries that sum up to 2020', () => {
			expect(expenseReport.calculateThreeEntries()).toBe(5074500);
		});
	});

	describe('Given invalid entries', () => {
		const reportEntries = [1000, 1000, 1000];
		const expenseReport = new ExpenseReport(reportEntries);

		it('throws invalid expense report error', () => {
			expect(() => expenseReport.calculateTwoEntries()).toThrow(InvalidExpenseReportError);
			expect(() => expenseReport.calculateThreeEntries()).toThrow(InvalidExpenseReportError);
		});
	});


});