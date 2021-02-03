import Position from '../models/position';
import {PositionType} from '../interfaces/position-type';

describe('Position', () => {
	it('returns true for isTree when positionType is TREE', () => {
		expect(new Position(PositionType.TREE, 0, 0).isTree()).toBeTrue();
	});
});
