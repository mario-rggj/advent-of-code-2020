import {ExerciseRunnerResult} from '../utils/exercise-runner-result';
import MultipleDirectionService from './services/multiple-direction-service';
import Toboggan from './models/toboggan';
import SlopeParser from './utils/slope-parser';

export function run(filePath = './inputs/3.txt'): ExerciseRunnerResult {
	const slope = SlopeParser.parseInput(filePath);
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
