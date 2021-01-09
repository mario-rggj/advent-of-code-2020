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
		// if (parseInt(this.birthYear)) {
		// 	return false
		// }
		
		return true;
	}
}