import DatabaseEntry from './database-entry';
import PasswordValidator from './password-validator';
import Policy from './policy';

describe('Password Validator', () => {

	describe('Given valid password database', () => {
		const databaseEntries: Array<DatabaseEntry> = [
			new DatabaseEntry(new Policy(1, 3, 'a'), 'abcde'),
			new DatabaseEntry(new Policy(1, 3, 'b'), 'cdefg'),
			new DatabaseEntry(new Policy(2, 9, 'c'), 'ccccccccc')
		];

		const passwordValidator = new PasswordValidator(databaseEntries);

		it('calculates the amount of valid passwords', () => {
			expect(passwordValidator.calculateValidPasswordAmount()).toEqual(2);
		});
	});
});