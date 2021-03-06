import MultipleDirectionService from '../services/multiple-direction-service';
import Position from '../models/position';
import Slope from '../models/slope';

describe('MultipleDirectionService', () => {
	it('goes downhill in multiple directions and multiply the trees counts', () => {
		const positions = [
			[Position.terrainAt(0, 0), Position.terrainAt(1, 0), Position.terrainAt(2, 0), Position.terrainAt(3, 0)],
			[Position.terrainAt(0, 1), Position.treeAt(1, 1), Position.treeAt(2, 1), Position.treeAt(3, 1)],
			[Position.treeAt(0, 2), Position.terrainAt(1, 2), Position.treeAt(2, 2), Position.treeAt(3, 2)],
			[Position.terrainAt(0, 3), Position.terrainAt(1, 3), Position.terrainAt(2, 3), Position.treeAt(3, 3)],
		];
		const slope = new Slope(positions);
		const multipleDirectionService = new MultipleDirectionService();
		const directions = [
			{right: 1, down: 1},
			{right: 3, down: 1},
		];

		const expectedMultiplicationResult = 6;
		const multiplicationResult = multipleDirectionService.goDownhillInMultipleDirections(directions, slope);

		expect(multiplicationResult).toEqual(expectedMultiplicationResult);
	});
});
