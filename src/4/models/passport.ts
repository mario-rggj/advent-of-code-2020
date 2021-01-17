import { Validator } from './validators';

export default class Passport {

	constructor(readonly birthYear?: string,
		readonly issueYear?: string,
		readonly expirationYear?: string,
		readonly height?: string,
		readonly hairColor?: string,
		readonly eyeColor?: string,
		readonly id?: string,
		readonly countryId?: string,
		readonly validators?: Validator[]) { }

	validate(): boolean {
		if (this.validators && this.validators.length > 0) {
			const isValid = this.validators.reduce((isValid, validator) => {
				return validator.validate(this) && isValid;
			},true);
			return isValid;
		}
		return true;
	}
}
