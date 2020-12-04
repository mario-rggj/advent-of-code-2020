import fs from 'fs';

export default class Parser {
	static fromTxtToNumberArray(filePath: string): Array<number> {

		const 
			file = fs.readFileSync(filePath),
			fileContent = file.toString();

		return fileContent.split('\n').map(value => Number.parseInt(value));
	}
}