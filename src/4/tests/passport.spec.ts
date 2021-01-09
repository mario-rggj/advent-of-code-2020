import Passport from '../models/passport';
import each from 'jest-each';

class PassportTestBuilder {
	birthYear: string;
	issueYear: string;
	expirationYear: string;
	height: string;
	hairColor: string;
	eyeColor: string;
	id: string;
	countryId: string;

	constructor() {
		this.birthYear = '';
		this.issueYear = '';
		this.expirationYear = '';
		this.height = '';
		this.hairColor = '';
		this.eyeColor = '';
		this.id = '';
		this.countryId = '';
	}

	withBirthYear(year: string): PassportTestBuilder  {
		this.birthYear = year;
		return this;
	}

	build(): Passport {
		return new Passport(this.birthYear, this.issueYear, this.expirationYear, this.height, this.hairColor, this.eyeColor, this.id, this.countryId);
	}
}

describe('Passport', () => {
	describe('Birth Year validation', () => {
		// describe('Given 4 digits year', () => {

		// });

		describe('Given invalid birth year format', () => {
			each([
				'202',
				'2023',
				'1919',
				'abc',
				'202a',
				'!!',
			])
				.it('when birth year is %s invalidate passport', (birthYear) => {
					const passport = new PassportTestBuilder().withBirthYear(birthYear).build();
					expect(passport.hasValidBirthYear()).toBeFalse();
				});
		});
	});
});