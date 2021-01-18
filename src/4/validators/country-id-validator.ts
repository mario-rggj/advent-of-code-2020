import Passport from '../models/passport';
import Validator from './validator';

export default class CountryIdValidator implements Validator {
	validate(passport: Passport): boolean {
		return true;
	}
}