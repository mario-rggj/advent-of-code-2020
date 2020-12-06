import fs from 'fs';

export default class Parser {

	private static readFileContent(filePath: string): string {
		return fs.readFileSync(filePath).toString();
	}

	static fromTxtToStringArray(filePath: string): Array<string> {
		return Parser.readFileContent(filePath).split('\n').filter(line => line);
	}

	static fromTxtToNumberArray(filePath: string): Array<number> {
		return Parser.fromTxtToStringArray(filePath).map(value => Number.parseInt(value));
	}
}