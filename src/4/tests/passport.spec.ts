import each from 'jest-each';
import { PassportTestBuilder } from './passport-builder';
import BirthYearValidator from '../validators/birth-year-validator';
import IssueYearValidator from '../validators/issue-year-validator';
import ExpirationYearValidator from '../validators/expiration-year-validator';
import HeightValidator from '../validators/height-validator';
import HairColorValidator from '../validators/hair-color-validator';
import EyeColorValidator from '../validators/eye-color-validator';
import PassportIdValidator from '../validators/passport-id-validator';
import CountryIdValidator from '../validators/country-id-validator';

describe('Passport', () => {
	describe('Birth Year validation', () => {
		describe('Given invalid birth year', () => {
			each([
				'202',
				'2023',
				'1919',
				'abc',
				'202a',
				'!!',
			])
				.it('when birth year is %s invalidate passport', (birthYear) => {
					const passport = new PassportTestBuilder()
						.withBirthYear(birthYear)
						.withValidators([new BirthYearValidator])
						.build();
					expect(passport.validate()).toBeFalse();
				});
		});

		describe('Given valid birth year', () => {
			each([
				'2002',
				'1993',
				'1920',
				'1985',
				'1964',
				'2000',
			])
				.it('when birth year is %s', (birthYear) => {
					const passport = new PassportTestBuilder()
						.withBirthYear(birthYear)
						.withValidators([new BirthYearValidator])
						.build();
					expect(passport.validate()).toBeTrue();
				});
		});
	});

	describe('Issued Year validation', () => {
		describe('Given valid issue year', () => {
			each([
				'2010',
				'2015',
				'2020',
				'2011',
			])
				.it('when issue year is %s', (issueYear) => {
					const passport = new PassportTestBuilder()
						.withIssueYear(issueYear)
						.withValidators([new IssueYearValidator])
						.build();
					expect(passport.validate()).toBeTrue();
				});
		});

		describe('Given invalid issued year', () => {
			each([
				'2000',
				'!!',
				'2009',
				'2021',
				'1999',
			])
				.it('when issue year is %s invalidate passport', (issueYear) => {
					const passport = new PassportTestBuilder()
						.withIssueYear(issueYear)
						.withValidators([new IssueYearValidator])
						.build();
					expect(passport.validate()).toBeFalse();
				});
		});
	});

	describe('Expiration Year validation', () => {
		describe('Given valid expiration year', () => {
			each([
				'2020',
				'2022',
				'2025',
				'2030',
			])
				.it('when expiration year is %s', (expirationYear) => {
					const passport = new PassportTestBuilder()
						.withExpirationYear(expirationYear)
						.withValidators([new ExpirationYearValidator])
						.build();
					expect(passport.validate()).toBeTrue();
				});
		});

		describe('Given invalid expiration year', () => {
			each([
				'2019',
				'!!',
				'abc',
				'2031',
				'20000',
			])
				.it('when expiration year is %s invalidate passport', (expirationYear) => {
					const passport = new PassportTestBuilder()
						.withExpirationYear(expirationYear)
						.withValidators([new ExpirationYearValidator])
						.build();
					expect(passport.validate()).toBeFalse();
				});
		});
	});

	describe('Height validation', () => {
		describe('Given valid height', () => {
			each([
				'150cm',
				'59in',
				'193cm',
				'76in',
			])
				.it('when height is %s', (height) => {
					const passport = new PassportTestBuilder()
						.withHeight(height)
						.withValidators([new HeightValidator])
						.build();
					expect(passport.validate()).toBeTrue();
				});
		});

		describe('Given invalid height', () => {
			each([
				'150',
				'149cm',
				'150CM',
				'194cm',
				'58in',
				'59IN',
				'77in',
				'abc',
				'!',
			])
				.it('when height is %s invalidate passport', (height) => {
					const passport = new PassportTestBuilder()
						.withHeight(height)
						.withValidators([new HeightValidator])
						.build();
					expect(passport.validate()).toBeFalse();
				});
		});
	});

	describe('Hair color validation', () => {
		describe('Given valid hair color', () => {
			each([
				'#123456',
				'#aaaaaa',
				'#54cdef',
				'#5abcd9',
			])
				.it('when hair color is %s', (hairColor) => {
					const passport = new PassportTestBuilder()
						.withHairColor(hairColor)
						.withValidators([new HairColorValidator])
						.build();
					expect(passport.validate()).toBeTrue();
				});
		});

		describe('Given invalid hair color', () => {
			each([
				'#',
				'',
				'#12345',
				'abcdefg',
				'123456',
				'#1234567',
				'#abcdeg',
				'!',
			])
				.it('when hair color is %s invalidate passport', (hairColor) => {
					const passport = new PassportTestBuilder()
						.withHairColor(hairColor)
						.withValidators([new HairColorValidator])
						.build();
					expect(passport.validate()).toBeFalse();
				});
		});
	});

	describe('Eye color validation', () => {
		describe('Given valid eye color', () => {
			each([
				'amb',
				'blu',
				'brn',
				'gry',
				'grn',
				'hzl',
				'oth',
			])
				.it('when eye color is %s', (eyeColor) => {
					const passport = new PassportTestBuilder()
						.withEyeColor(eyeColor)
						.withValidators([new EyeColorValidator])
						.build();
					expect(passport.validate()).toBeTrue();
				});
		});

		describe('Given invalid eye color', () => {
			each([
				'',
				'!',
				'ambb',
				'anb',
				'gra',
				'b',
				'blue',
				'ble',
				'123',
			])
				.it('when eye color is %s invalidate passport', (eyeColor) => {
					const passport = new PassportTestBuilder()
						.withEyeColor(eyeColor)
						.withValidators([new EyeColorValidator])
						.build();
					expect(passport.validate()).toBeFalse();
				});
		});
	});

	describe('Passport ID validation', () => {
		describe('Given valid passport ID', () => {
			each([
				'000000000',
				'000000001',
				'123456789',
				'098765432',
			])
				.it('when passport ID is %s', (passportId) => {
					const passport = new PassportTestBuilder()
						.withPassportId(passportId)
						.withValidators([new PassportIdValidator])
						.build();
					expect(passport.validate()).toBeTrue();
				});
		});

		describe('Given invalid passport ID', () => {
			each([
				'',
				'!',
				'abcdefghi',
				'#!$%ˆ&*(&',
				'00000000',
				'0000000000',
			])
				.it('when passport ID is %s invalite passport', (passportId) => {
					const passport = new PassportTestBuilder()
						.withPassportId(passportId)
						.withValidators([new PassportIdValidator])
						.build();
					expect(passport.validate()).toBeFalse();
				});
		});
	});

	describe('Country ID validation', () => {
		describe('Given any country ID', () => {
			each([
				undefined,
				null,
				'88',
				'20',
				'',
				'!',
			])
				.it('when country ID is %s', (countryId) => {
					const passport = new PassportTestBuilder()
						.withCountryId(countryId)
						.withValidators([new CountryIdValidator])
						.build();
					expect(passport.validate()).toBeTrue();
				});
		});

	});
});
