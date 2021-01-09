import Passport from './passport';

export default class PassportScanner {

	scanPassportBatch(passports: Array<Passport>): number {
		return passports.reduce((validAmount, passport) =>
			this.isValid(passport) ? ++validAmount : validAmount
		, 0);
	}

	private isValid(passport: Passport): boolean {
		return !!(passport.birthYear
			&& passport.expirationYear
			&& passport.eyeColor
			&& passport.hairColor
			&& passport.height
			&& passport.id
			&& passport.issueYear);
	}
}