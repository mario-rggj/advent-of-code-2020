import DatabaseEntry from './database-entry';
import PasswordValidator from './password-validator';
import SledPolicy from './sled-policy';
import TobogganPolicy from './toboggan-policy';

describe('Password Validator', () => {

	describe('Given valid password database with sled policy', () => {
		const databaseEntries: Array<DatabaseEntry> = [
			new DatabaseEntry(new SledPolicy(1, 3, 'a'), 'abcde'),
			new DatabaseEntry(new SledPolicy(1, 3, 'b'), 'cdefg'),
			new DatabaseEntry(new SledPolicy(2, 9, 'c'), 'ccccccccc')
		];

		const passwordValidator = new PasswordValidator(databaseEntries);

		it('calculates the amount of valid passwords', () => {
			expect(passwordValidator.calculateValidPasswordAmount()).toEqual(2);
		});
	});

	describe('Given valid password database with toboggan policy', () => {
		const databaseEntries: Array<DatabaseEntry> = [
			new DatabaseEntry(new TobogganPolicy(1, 3, 'a'), 'abcde'),
			new DatabaseEntry(new TobogganPolicy(1, 3, 'b'), 'cdbefg'),
			new DatabaseEntry(new TobogganPolicy(2, 9, 'c'), 'cbccccccb')
		];

		const passwordValidator = new PasswordValidator(databaseEntries);

		it('calculates the amount of valid passwords', () => {
			expect(passwordValidator.calculateValidPasswordAmount()).toEqual(2);
		});
	});
});