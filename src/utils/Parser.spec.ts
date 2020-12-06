import fs from 'fs';
import Parser from './Parser';

describe('Given text file with numbers, separated by newline', () => {
	const testFilePath = './src/utils/input-test.txt';

	beforeEach(() => {
		fs.writeFileSync(testFilePath, '1000\n5\n1020\n500\n100');
	});

	afterEach(() => {
		fs.rmSync(testFilePath);
	});

	it('parses input file lines to string array', () => {
		const
			expectedArray = ['1000', '5', '1020', '500', '100'],
			parsedLinesArray = Parser.fromTxtToStringArray(testFilePath);

		expect(parsedLinesArray).toEqual(expectedArray);
	});

	it('parses input file to number array', () => {
		const
			expectedNumberArray = [1000, 5, 1020, 500, 100],
			parsedNumberArray = Parser.fromTxtToNumberArray(testFilePath);

		expect(parsedNumberArray).toEqual(expectedNumberArray);
	});

});