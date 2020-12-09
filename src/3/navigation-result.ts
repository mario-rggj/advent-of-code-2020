import Position from './position';

export default interface NavigationResult {
	newPosition: Position;
	reachedEnd: boolean;
} // eslint-disable-line
