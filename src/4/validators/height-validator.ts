import Passport from '../models/passport';
import Validator from './validator';

export default class HeightValidator implements Validator {
	validate(passport: Passport): boolean {
		if (!passport.height) {
			return false;
		}
		
		const heightLength = passport.height.length;
		if (!heightLength || heightLength > 5 || heightLength < 4) {
			return false;
		}

		const heightMeasurementUnit = passport.height.substring(heightLength-2, heightLength);
		const height = parseInt(passport.height.substring(0, heightLength-2));

		if (heightMeasurementUnit === 'cm') {
			if (height >= 150 && height <= 193) {
				return true;
			}
		} else if (heightMeasurementUnit === 'in') {
			if (height >= 59 && height <= 76) {
				return true;
			}
		}
		return false;
	}
}