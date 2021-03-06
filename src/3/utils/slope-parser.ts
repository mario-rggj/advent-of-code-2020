import Parser from '../../utils/parser';
import Position from '../models/position';
import Slope from '../models/slope';

export default class SlopeParser {
	static parseInput(filePath: string): Slope {
		const fileContent = Parser.fromTxtToStringArray(filePath);
		const positions: Position[][] = [];

		fileContent.forEach((inputLine, lineIndex) => {
			const columns = inputLine.split('').map((inputCharacter, columnIndex) => {
				return inputCharacter === '.'
					? Position.terrainAt(columnIndex, lineIndex)
					: Position.treeAt(columnIndex, lineIndex);
			});
			positions.push(columns);
		});

		return new Slope(positions);
	}
}