import Passport from './passport';

export default class PassportScanner {

	scanPassportBatch(passports: Array<Passport>): number {
		return passports.reduce((validAmount, passport) =>
			this.hasRequiredInformation(passport) ? ++validAmount : validAmount
		, 0);
	}

	validatePassportBatch(passports: Array<Passport>): number {
		return passports.reduce((validAmount, passport) =>
			passport.validate() ? ++validAmount : validAmount
		,0);
	}

	private hasRequiredInformation(passport: Passport): boolean {
		return !!(passport.birthYear
			&& passport.expirationYear
			&& passport.eyeColor
			&& passport.hairColor
			&& passport.height
			&& passport.id
			&& passport.issueYear);
	}
}