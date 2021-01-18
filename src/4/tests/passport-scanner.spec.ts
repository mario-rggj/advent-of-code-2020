import Passport from '../models/passport';
import PassportScanner from '../models/passport-scanner';
import BirthYearValidator from '../validators/birth-year-validator';
import CountryIdValidator from '../validators/country-id-validator';
import ExpirationYearValidator from '../validators/expiration-year-validator';
import EyeColorValidator from '../validators/eye-color-validator';
import HairColorValidator from '../validators/hair-color-validator';
import HeightValidator from '../validators/height-validator';
import IssueYearValidator from '../validators/issue-year-validator';
import PassportIdValidator from '../validators/passport-id-validator';
import { PassportTestBuilder } from './passport-builder';

describe('PassportScanner', () => {
	describe('Given a passport array', () => {
		const validators = [
			new BirthYearValidator(),
			new CountryIdValidator(),
			new ExpirationYearValidator(),
			new EyeColorValidator(),
			new HairColorValidator(),
			new HeightValidator(),
			new IssueYearValidator(),
			new PassportIdValidator()
		];
		const passports = [
			new PassportTestBuilder()
				.withIssueYear('2017')
				.withBirthYear('1937')
				.withExpirationYear('2020')
				.withHeight('183cm')
				.withHairColor('#fffffd')
				.withEyeColor('gry')
				.withPassportId('860033327')
				.withCountryId('147')
				.withValidators(validators)
				.build(),
			new PassportTestBuilder()
				.withIssueYear('2013')
				.withBirthYear('1929')
				.withExpirationYear('2023')
				.withHairColor('#cfa07d')
				.withEyeColor('amb')
				.withPassportId('028048884')
				.withCountryId('350')
				.withValidators(validators)
				.build(),
			new PassportTestBuilder()
				.withIssueYear('2013')
				.withBirthYear('1931')
				.withExpirationYear('2024')
				.withHeight('179cm')
				.withHairColor('#ae17e1')
				.withEyeColor('brn')
				.withPassportId('760753108')
				.withValidators(validators)
				.build(),
			new PassportTestBuilder()
				.withIssueYear('2011')
				.withExpirationYear('2025')
				.withHeight('59in')
				.withHairColor('#cfa07d')
				.withEyeColor('brn')
				.withPassportId('166559648')
				.withValidators(validators)
				.build(),
		];

		it('counts the amount of passports with required information', () => {
			const passportScanner = new PassportScanner();

			const validPassportsCount = passportScanner.scanPassportBatch(passports as Passport[]);

			expect(validPassportsCount).toEqual(2);
		});
		
		it('counts the amount of passports with valid information', () => {
			const passportScanner = new PassportScanner();

			const validPassportsCount = passportScanner.validatePassportBatch(passports as Passport[]);

			expect(validPassportsCount).toEqual(2);
		});
	});
});