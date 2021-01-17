import Passport from '../models/passport';
import Validator from './validator';

export default class ExpirationYearValidator implements Validator {
	validate(passport: Passport): boolean {
		if (passport.expirationYear?.length !== 4) {
			return false;
		}
		const expirationYearAsInteger = parseInt(passport.expirationYear);
		return expirationYearAsInteger >= 2020 && expirationYearAsInteger <= 2030;
	}
}