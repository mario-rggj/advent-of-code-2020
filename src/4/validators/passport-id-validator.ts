import Passport from '../models/passport';
import Validator from './validator';

export default class PassportIdValidator implements Validator {
	validate(passport: Passport): boolean {
		if (!passport.id || passport.id.length != 9) {
			return false;
		}

		const passportRegex = new RegExp(/([0-9]){9}/);

		return passportRegex.test(passport.id);
	}
}