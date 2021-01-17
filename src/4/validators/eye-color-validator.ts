import Passport from '../models/passport';
import Validator from './validator';

export default class EyeColorValidator implements Validator {
	validate(passport: Passport): boolean {
		if (!passport.eyeColor || passport.eyeColor.length !== 3) {
			return false;
		}

		const avaiableEyeColors = [
			'amb',
			'blu',
			'brn',
			'gry',
			'grn',
			'hzl',
			'oth',
		];

		return avaiableEyeColors.includes(passport.eyeColor);
	}
}