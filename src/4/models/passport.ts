export default class Passport {

	constructor(readonly birthYear?: string,
		readonly issueYear?: string,
		readonly expirationYear?: string,
		readonly height?: string,
		readonly hairColor?: string,
		readonly eyeColor?: string,
		readonly id?: string,
		readonly countryId?: string) { }

	hasValidBirthYear(): boolean {
		if (this.birthYear?.length !== 4) {
			return false;
		}
		const birthYearAsInteger = parseInt(this.birthYear);
		return birthYearAsInteger >= 1920 && birthYearAsInteger <= 2002;
	}

	hasValidIssueYear(): boolean {
		if (this.issueYear?.length !== 4) {
			return false;
		}
		const issueYearAsInteger = parseInt(this.issueYear);
		return issueYearAsInteger >= 2010 && issueYearAsInteger <= 2020;
	}
}
