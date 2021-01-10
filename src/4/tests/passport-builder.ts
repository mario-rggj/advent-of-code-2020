import Passport from '../models/passport';

export class PassportTestBuilder {
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

	withIssueYear(issueYear: string) {
		this.issueYear = issueYear;
		return this;
	}

	build(): Passport {
		return new Passport(this.birthYear, this.issueYear, this.expirationYear, this.height, this.hairColor, this.eyeColor, this.id, this.countryId);
	}
}
