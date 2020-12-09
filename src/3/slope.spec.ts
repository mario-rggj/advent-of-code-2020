import each from 'jest-each';
import Position from './position';
import { PositionType } from './position-type';
import Slope from './slope';

const makePositions = ({ x = 0, y = 0 }) => {
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

describe('Slope', () => {
	describe('Given 4x4 matrix positions', () => {
		const positions = makePositions({ x: 4, y: 4 });
		const slope = new Slope(positions);

		each([
			[0, 0, 1, 3, false],
			[1, 1, 2, 0, false],
			[2, 2, 3, 1, true],
			[2, 3, 3, 2, true],
		]).it('when current position is X:%s Y:%s', (currentX, currentY, expectedX, expectedY, expectedReachedEnd) => {
			const currentPosition = positions[currentX][currentY];
			const expectedPosition = { x: expectedX, y: expectedY };
			const direction = { down: 1, right: 3 };
			const navigationResult = slope.navigate(currentPosition, direction);
			
			expect(navigationResult.newPosition).toMatchObject(expectedPosition);
			expect(navigationResult.reachedEnd).toEqual(expectedReachedEnd);
		});

		it('returns the initial position', () => {
			expect(slope.getInitialPosition()).toMatchObject({ x: 0, y: 0 });
		});
	});
});
