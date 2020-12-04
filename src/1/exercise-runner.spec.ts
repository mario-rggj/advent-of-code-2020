import fs from 'fs';
import * as exerciseRunner from './exercise-runner';

describe('Exercise 1', () => {
	describe('Given a valid expense report', () => {
		const testFilePath = './src/1/input-test.txt';

		beforeEach(() => {
			fs.writeFileSync(testFilePath, '500\n100\n10\n2019\n1');
		});

		afterEach(() => {
			fs.rmSync(testFilePath);
		});

		it('multiplies entries that sum up to 2020', () => {
			const
				exerciseResult = exerciseRunner.run(testFilePath),
				expectedResult = 2019;

			expect(exerciseResult).toEqual(expectedResult);
		});

	});
});
	