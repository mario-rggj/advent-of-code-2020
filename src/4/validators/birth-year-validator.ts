import Passport from '../models/passport';
import Validator from './validator';

export default class BirthYearValidator implements Validator {
	validate(passport: Passport): boolean {
		if (passport.birthYear?.length !== 4) {
			return false;
		}
		const birthYearAsInteger = parseInt(passport.birthYear);
		return birthYearAsInteger >= 1920 && birthYearAsInteger <= 2002;
	}
}