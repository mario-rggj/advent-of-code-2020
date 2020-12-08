import {PositionType} from './position-type';

export default class Position {

	constructor(
		private readonly positionType: PositionType,
		public readonly x: number,
		public readonly y: number,
	) {
	}

	isTree(): boolean {
		return this.positionType === PositionType.TREE;
	}
}
