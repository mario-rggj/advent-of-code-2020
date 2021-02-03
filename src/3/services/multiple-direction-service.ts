import Direction from '../interfaces/direction';
import Slope from '../models/slope';
import Toboggan from '../models/toboggan';

export default class MultipleDirectionService {
	goDownhillInMultipleDirections(directions: Array<Direction>, slope: Slope): number {
		let treeCountMultiplication = 1;

		directions.forEach(direction => {
			const toboggan = new Toboggan(direction);
			treeCountMultiplication *= toboggan.goDownhill(slope);
		});

		return treeCountMultiplication;
	}
}
