import Passport from '../models/passport';
import Validator from './validator';

export default class HairColorValidator implements Validator {
	validate(passport: Passport): boolean {
		if (!passport.hairColor || passport.hairColor.length !== 7) {
			return false;
		}

		const hexColorRegex = new RegExp(/^#([0-9a-f]{6})$/i);

		return hexColorRegex.test(passport.hairColor);
	}
}