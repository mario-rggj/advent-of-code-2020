import fs from 'fs';

export default class Parser {

	private static readFileContent(filePath: string) {
		return fs.readFileSync(filePath).toString();
	}

	static fromTxtToStringArray(filePath: string) {
		return Parser.readFileContent(filePath).split('\n');
	}

	static fromTxtToNumberArray(filePath: string): Array<number> {
		return Parser.fromTxtToStringArray(filePath).map(value => Number.parseInt(value));
	}
}