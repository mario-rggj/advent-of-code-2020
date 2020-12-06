import fs from 'fs';
import DatabaseEntry from './database-entry';
import PasswordDatabaseParser from './password-database-parser';
import Policy from './policy';

describe('Password Database Parser', () => {
	describe('Given valid input file', () => {
		const testFilePath = './src/2/input-test.txt';

		beforeEach(() => {
			const testFileContent = 
				'1-3 a: abcde\n'+
				'1-3 b: cdefg\n'+
				'2-9 c: ccccccccc\n';

			fs.writeFileSync(testFilePath, testFileContent);
		});
	
		afterEach(() => {
			fs.rmSync(testFilePath);
		});

		it('parses input file to database entry array', () => {
			const expectedResult: Array<DatabaseEntry> = [
				new DatabaseEntry(new Policy(1, 3, 'a'), 'abcde'),
				new DatabaseEntry(new Policy(1, 3, 'b'), 'cdefg'),
				new DatabaseEntry(new Policy(2, 9, 'c'), 'ccccccccc')
			];

			const parsedResult = PasswordDatabaseParser.fromTxtToPasswordDatabase(testFilePath);
			
			expect(parsedResult).toStrictEqual(expectedResult);
		});
	});
});