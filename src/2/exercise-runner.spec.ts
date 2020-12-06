import fs from 'fs';
import { ExerciseRunnerResult } from '../utils/exercise-runner-result';
import * as exerciseRunner from './exercise-runner';

describe('Exercise 2', () => {
	describe('Given a valid password database', () => {
		const testFilePath = './src/2/database-input-test.txt';

		beforeEach(() => {
			const testFileContent = 
				'2-3 k: abkcdek\n'+
				'3-3 b: bcbdebfg\n'+
				'2-9 c: cccccccccc\n';
			fs.writeFileSync(testFilePath, testFileContent);
		});

		afterEach(() => {
			fs.rmSync(testFilePath);
		});

		it('counts valid password amount', () => {
			const
				exerciseResult: ExerciseRunnerResult = exerciseRunner.run(testFilePath),
				expectedResult: ExerciseRunnerResult = { partOne: 2, partTwo: 0 };

			expect(exerciseResult).toEqual(expectedResult);
		});

	});
});
