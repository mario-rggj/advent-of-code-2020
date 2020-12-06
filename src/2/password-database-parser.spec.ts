import fs from 'fs';
import DatabaseEntry from './database-entry';
import PasswordDatabaseParser, { PolicyParseConfiguration } from './password-database-parser';
import SledPolicy from './sled-policy';
import TobogganPolicy from './toboggan-policy';

describe('Password Database Parser', () => {
	describe('Given valid input file', () => {
		const testFilePath = './src/2/parser-input-test.txt';

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

		describe('Given sled policy configuration', () => {
			it('parses input file to database entry array', () => {
				const expectedResult: Array<DatabaseEntry> = [
					new DatabaseEntry(new SledPolicy(1, 3, 'a'), 'abcde'),
					new DatabaseEntry(new SledPolicy(1, 3, 'b'), 'cdefg'),
					new DatabaseEntry(new SledPolicy(2, 9, 'c'), 'ccccccccc')
				];
	
				const parsedResult = PasswordDatabaseParser.fromTxtToPasswordDatabase(testFilePath, PolicyParseConfiguration.SLED);
				
				expect(parsedResult).toStrictEqual(expectedResult);
			});
		});

		describe('Given toboggan policy configuration', () => {
			it('parses input file to database entry array', () => {
				const expectedResult: Array<DatabaseEntry> = [
					new DatabaseEntry(new TobogganPolicy(1, 3, 'a'), 'abcde'),
					new DatabaseEntry(new TobogganPolicy(1, 3, 'b'), 'cdefg'),
					new DatabaseEntry(new TobogganPolicy(2, 9, 'c'), 'ccccccccc')
				];
	
				const parsedResult = PasswordDatabaseParser.fromTxtToPasswordDatabase(testFilePath, PolicyParseConfiguration.TOBOGGAN);
				
				expect(parsedResult).toStrictEqual(expectedResult);
			});
		});
	});
});