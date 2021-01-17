import Passport from '../models/passport';
import Validator from '../validators/validator';

export class PassportTestBuilder {
	birthYear: string;
	issueYear: string;
	expirationYear: string;
	height: string;
	hairColor: string;
	eyeColor: string;
	id: string;
	countryId: string;
	validators: Validator[];

	constructor() {
		this.birthYear = '';
		this.issueYear = '';
		this.expirationYear = '';
		this.height = '';
		this.hairColor = '';
		this.eyeColor = '';
		this.id = '';
		this.countryId = '';
		this.validators = [];
	}

	withBirthYear(year: string): PassportTestBuilder  {
		this.birthYear = year;
		return this;
	}

	withIssueYear(issueYear: string): PassportTestBuilder {
		this.issueYear = issueYear;
		return this;
	}

	withExpirationYear(expirationYear: string): PassportTestBuilder {
		this.expirationYear = expirationYear;
		return this;
	}

	withHeight(height: string): PassportTestBuilder {
		this.height = height;
		return this;
	}

	withHairColor(hairColor: string): PassportTestBuilder {
		this.hairColor = hairColor;
		return this;
	}

	withEyeColor(eyeColor: string): PassportTestBuilder {
		this.eyeColor = eyeColor;
		return this;
	}

	withPassportId(id: string): PassportTestBuilder {
		this.id = id;
		return this;
	}

	withValidators(validators: Validator[]): PassportTestBuilder {
		this.validators = validators;
		return this;
	}

	build(): Passport {
		return new Passport(this.birthYear, this.issueYear, this.expirationYear, this.height, this.hairColor, this.eyeColor, this.id, this.countryId, this.validators);
	}
}
