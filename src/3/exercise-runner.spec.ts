import fs from 'fs';
import * as exerciseRunner from './exercise-runner';

describe('Exercise 3', () => {

	describe('Given valid slope file', () => {
		const slopeFilePath = './src/3/slope-input-file.txt';

		beforeEach(() => {
			const testFileContent =
				'.#.#...#....\n' +
				'.###.#.#....\n' +
				'.#.#####....\n';

			fs.writeFileSync(slopeFilePath, testFileContent);
		});

		afterEach(() => {
			fs.rmSync(slopeFilePath);
		});

		it('counts trees in the way', () => {
			const expectedTreesCount = 2;
			const result = exerciseRunner.run(slopeFilePath);

			expect(result.partOne).toEqual(expectedTreesCount);
		});

		it('multiplies tree count in differenct directions', () => {
			const expectedMultiplicationResult = 2;
			const result = exerciseRunner.run(slopeFilePath);

			expect(result.partTwo).toEqual(expectedMultiplicationResult);
		});
	});
});
