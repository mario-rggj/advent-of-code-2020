import Slope from './map';
import {Direction} from './direction';

export default class Toboggan {
	constructor(private readonly map: Slope, private readonly direction: Direction) {
	}

	moveAllTheWayToTheBottom() {
		const currentPosition = this.map.getInitialPosition();
		let amountOfTrees = 0;

		while(!map.reachedBottom(currentPosition)) {
			currentPosition = this.map.navigateFromTo(currentPosition, this.direction);
			if(currentPosition.isTree()) {
				amountOfTrees++;
			}
		}
	}
}
