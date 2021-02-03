import {PositionType} from '../interfaces/position-type';

export default class Position {

	constructor(
		private readonly positionType: PositionType,
		public readonly x: number,
		public readonly y: number,
	) {
	}

	static treeAt(x: number, y: number): Position {
		return new Position(PositionType.TREE, x, y);
	}

	static terrainAt(x: number, y: number): Position {
		return new Position(PositionType.TERRAIN, x, y);
	}

	isTree(): boolean {
		return this.positionType === PositionType.TREE;
	}
}
