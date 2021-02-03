import Position from './position';
import Direction from './direction';
import NavigationResult from './navigation-result';

export default class Slope {
	constructor(private readonly positions: Array<Array<Position>>) {
	}

	getInitialPosition(): Position {
		return this.positions[0][0];
	}

	navigate(currentPosition: Position, direction: Direction): NavigationResult {
		const newXPosition = currentPosition.x + direction.down;
		const newYPosition = this.calculateNewYPosition(currentPosition, direction);
		const newPosition = this.positions[newXPosition][newYPosition];
		const reachedEnd = newXPosition === this.positions.length - 1;

		return { newPosition, reachedEnd };
	}

	private calculateNewYPosition(currentPosition: Position, direction: Direction): number {
		let newYPosition = currentPosition.y + direction.right;
		const YLimit = this.positions[0].length;
		
		if (newYPosition >= YLimit){
			newYPosition = newYPosition - YLimit;
		}

		return newYPosition;
	}
}
