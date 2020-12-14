import Direction from './direction';
import toboggan from './toboggan';

export default class MultipleDirectionService {
	goDownhillInMultipleDirections(toboggan: toboggan, directions: Array<Direction>) {
		let treeCountMultiplication = 1;

		directions.forEach(direction => {
			toboggan.changeDirection(direction);
			treeCountMultiplication *= toboggan.goDownhill();
		});

		return treeCountMultiplication;
	}
}