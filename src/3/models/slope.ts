import Position from './position';
import Direction from '../interfaces/direction';
import NavigationResult from '../interfaces/navigation-result';

export default class Slope {
	constructor(private readonly positions: Array<Array<Position>>) {
	}

	getInitialPosition(): Position {
		return this.positions[0][0];
	}

	navigate(currentPosition: Position, direction: Direction): NavigationResult {
		const newYPosition = currentPosition.y + direction.down;
		const newXPosition = this.calculateNewXPosition(currentPosition, direction);
		const newPosition = this.positions[newYPosition][newXPosition];
		const reachedEnd = newYPosition === this.positions.length - 1;

		return { newPosition, reachedEnd };
	}

	private calculateNewXPosition(currentPosition: Position, direction: Direction): number {
		let newXPosition = currentPosition.x + direction.right;
		const XLimit = this.positions[0].length;
		
		if (newXPosition >= XLimit){
			newXPosition = newXPosition - XLimit;
		}

		return newXPosition;
	}
}
