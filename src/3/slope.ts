import Position from './position';
import Direction from './direction';

export default class Slope {
	constructor(private readonly positions: Array<Array<Position>>) {
	}

	navigate(currentPosition: Position, direction: Direction) {
		return undefined;
	}
}
