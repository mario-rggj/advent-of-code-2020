import Slope from './slope';
import Direction from './direction';

export default class Toboggan {
	constructor(private readonly slope: Slope, private readonly direction: Direction) {
	}

	goDownhill(): number {
		let currentPosition = this.slope.getInitialPosition();
		let treesHitCounter = currentPosition.isTree() ? 1 : 0;
		let navigationResult;

		do {
			navigationResult = this.slope.navigate(currentPosition, this.direction);
			currentPosition = navigationResult.newPosition;
			
			if (currentPosition.isTree()) {
				treesHitCounter++;
			}

		} while (!navigationResult.reachedEnd);

		return treesHitCounter;
	}
}
