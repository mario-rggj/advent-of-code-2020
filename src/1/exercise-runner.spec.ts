import fs from 'fs';
import { ExerciseRunnerResult } from '../utils/exercise-runner-result';
import * as exerciseRunner from './exercise-runner';

describe('Exercise 1', () => {
	describe('Given a valid expense report', () => {
		const testFilePath = './src/1/input-test.txt';

		beforeEach(() => {
			fs.writeFileSync(testFilePath, '0\n1\n2019\n');
		});

		afterEach(() => {
			fs.rmSync(testFilePath);
		});

		it('multiplies entries that sum up to 2020', () => {
			const
				exerciseResult: ExerciseRunnerResult = exerciseRunner.run(testFilePath),
				expectedResult: ExerciseRunnerResult = { partOne: 2019, partTwo: 0 };

			expect(exerciseResult).toEqual(expectedResult);
		});

	});
});
