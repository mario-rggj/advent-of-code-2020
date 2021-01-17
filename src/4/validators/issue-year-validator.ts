import Passport from '../models/passport';
import Validator from './validator';

export default class IssueYearValidator implements Validator {
	validate(passport: Passport): boolean {
		if (passport.issueYear?.length !== 4) {
			return false;
		}
		const issueYearAsInteger = parseInt(passport.issueYear);
		return issueYearAsInteger >= 2010 && issueYearAsInteger <= 2020;
	}
}