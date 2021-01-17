import Passport from '../models/passport';
export default interface Validator {
	validate(passport: Passport): boolean
} // eslint-disable-line
