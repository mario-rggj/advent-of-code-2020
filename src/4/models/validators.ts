import Passport from './passport';

export interface Validator {
	validate(passport: Passport): boolean
}

export class BirthYearValidator implements Validator {
	validate(passport: Passport): boolean {
		if (passport.birthYear?.length !== 4) {
			return false;
		}
		const birthYearAsInteger = parseInt(passport.birthYear);
		return birthYearAsInteger >= 1920 && birthYearAsInteger <= 2002;
	}
}

export class IssueYearValidator implements Validator {
	validate(passport: Passport): boolean {
		if (passport.issueYear?.length !== 4) {
			return false;
		}
		const issueYearAsInteger = parseInt(passport.issueYear);
		return issueYearAsInteger >= 2010 && issueYearAsInteger <= 2020;
	}
}

