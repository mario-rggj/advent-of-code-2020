import { ExerciseRunnerResult } from '../utils/exercise-runner-result';
import Parser from '../utils/Parser';
import MultipleDirectionService from './multiple-direction-service';
import Position from './position';
import Slope from './slope';
import Toboggan from './toboggan';

function parseInput(filePath: string): Slope {
	const fileContent = Parser.fromTxtToStringArray(filePath);
	const positions: Position[][] = [];

	fileContent.forEach((inputLine, lineIndex) => {
		const columns = inputLine.split('').map((inputCharacter, columnIndex) => {
			return inputCharacter === '.'
				? Position.terrainAt(lineIndex, columnIndex)
				: Position.treeAt(lineIndex, columnIndex);
		});
		positions.push(columns);
	});

	return new Slope(positions);
}

export function run(filePath = './src/3/slope-input.txt'): ExerciseRunnerResult {
	const slope = parseInput(filePath);
	const direction = {right: 3, down: 1};
	const toboggan = new Toboggan(slope, direction);
	const tobogganService = new MultipleDirectionService();

	const partOneResult = toboggan.goDownhill();

	const partTwoDirections = [
		{right: 1, down: 1},
		{right: 3, down: 1},
		{right: 5, down: 1},
		{right: 7, down: 1},
		{right: 1, down: 2},
	];
	const partTwoResult = tobogganService.goDownhillInMultipleDirections(toboggan, partTwoDirections);

	return {
		partOne: partOneResult,
		partTwo: partTwoResult
	};
}