import Position from './position';
import {PositionType} from './position-type';

describe('Position', () => {
	it('returns true for isTree when positionType is TREE', () => {
		expect(new Position(PositionType.TREE, 0, 0).isTree()).toBeTrue();
	});
});
