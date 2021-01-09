import Direction from './direction';
import Slope from './slope';
import Toboggan from './toboggan';

export default class MultipleDirectionService {
	goDownhillInMultipleDirections(directions: Array<Direction>, slope: Slope) {
		let treeCountMultiplication = 1;

		directions.forEach(direction => {
			const toboggan = new Toboggan(direction);
			treeCountMultiplication *= toboggan.goDownhill(slope);
		});

		return treeCountMultiplication;
	}
}
