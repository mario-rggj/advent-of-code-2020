import Position from './position';
import {PositionType} from './position-type';
import Slope from './slope';

const makePositions = ({x = 0, y = 0}) => {
	const result = [];
	for (let i = 0; i < x; i++) {
		const line = [];
		for (let j = 0; j < y; j++) {
			line.push(new Position(PositionType.TERRAIN, i, j));
		}
		result.push(line);
	}
	return result;
};

describe('Map', () => {
	describe('Given 4x4 matrix positions', () => {
		const positions = makePositions({x: 4, y: 4});
		const map = new Slope(positions);

		it('navigates as expected', () => {
			const currentPosition = positions[0][0];
			const direction = {down: 1, right: 3};
			const expectedPosition = {x: 1, y: 3};
			expect(map.navigate(currentPosition, direction)).toMatchObject(expectedPosition);
		});
	});
});
