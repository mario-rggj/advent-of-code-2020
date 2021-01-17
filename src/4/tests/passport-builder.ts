import PasswordValidator from '../../2/password-validator';
import Passport from '../models/passport';
import { Validator } from '../models/validators';

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

	withIssueYear(issueYear: string) {
		this.issueYear = issueYear;
		return this;
	}

	withValidators(validators: Validator[]) {
		this.validators = validators;
		return this;
	}

	build(): Passport {
		return new Passport(this.birthYear, this.issueYear, this.expirationYear, this.height, this.hairColor, this.eyeColor, this.id, this.countryId, this.validators);
	}
}
