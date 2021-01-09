import {ExerciseRunnerResult} from '../utils/exercise-runner-result';
import Parser from '../utils/parser';
import MultipleDirectionService from './multiple-direction-service';
import Position from './position';
import Slope from './slope';
import Toboggan from './toboggan';

export function run(filePath = './inputs/3.txt'): ExerciseRunnerResult {
	const slope = parseInput(filePath);
	const direction = {right: 3, down: 1};
	const toboggan = new Toboggan(direction);
	const tobogganService = new MultipleDirectionService();

	const partOneResult = toboggan.goDownhill(slope);

	const partTwoDirections = [
		{right: 1, down: 1},
		{right: 3, down: 1},
		{right: 5, down: 1},
		{right: 7, down: 1},
		{right: 1, down: 2},
	];
	const partTwoResult = tobogganService.goDownhillInMultipleDirections(partTwoDirections, slope);

	return {
		partOne: partOneResult,
		partTwo: partTwoResult
	};
}

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
