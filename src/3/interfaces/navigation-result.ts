import Position from '../models/position';

export default interface NavigationResult {
	newPosition: Position;
	reachedEnd: boolean;
} // eslint-disable-line
