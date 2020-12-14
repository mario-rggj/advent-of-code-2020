import Direction from './direction';
import Position from './position';
import Slope from './slope';
import Toboggan from './toboggan';

describe('Toboggan', () => {
	const positions = [
		[Position.terrainAt(0, 0), Position.terrainAt(0, 1), Position.terrainAt(0, 2), Position.terrainAt(0, 3)],
		[Position.terrainAt(1, 0), Position.treeAt(1, 1), Position.treeAt(1, 2), Position.terrainAt(1, 3)],
		[Position.treeAt(2, 0), Position.terrainAt(2, 1), Position.treeAt(2, 2), Position.treeAt(2, 3)],
		[Position.terrainAt(3, 0), Position.terrainAt(3, 1), Position.terrainAt(3, 2), Position.treeAt(3, 3)],
	];
	const slope = new Slope(positions);

	describe('Given down 1 right 1 direction', () => {
		const direction: Direction = { down: 1, right: 1 };
		const toboggan = new Toboggan(slope, direction);

		it('hits three trees', () => {
			const treesHit = toboggan.goDownhill();
			expect(treesHit).toEqual(3);
		});
	});

	it('changes direction', () => {
		const oldDirection = {down: 1, right: 3};
		const newDirection = {down: 2, right: 5};
		const slope = new Slope([[]]);
		const toboggan = new Toboggan(slope, oldDirection);

		toboggan.changeDirection(newDirection);

		expect(toboggan.currentDirection).toEqual(newDirection);
	});
});