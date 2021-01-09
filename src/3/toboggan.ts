import Slope from './slope';
import Direction from './direction';

export default class Toboggan {
	constructor(private direction: Direction) {
	}

	goDownhill(slope: Slope): number {
		let currentPosition = slope.getInitialPosition();
		let treesHitCounter = currentPosition.isTree() ? 1 : 0;
		let navigationResult;

		do {
			navigationResult = slope.navigate(currentPosition, this.direction);
			currentPosition = navigationResult.newPosition;

			if (currentPosition.isTree()) {
				treesHitCounter++;
			}

		} while (!navigationResult.reachedEnd);

		return treesHitCounter;
	}
}
