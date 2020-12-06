export default class Policy {
	constructor(
		private readonly minOcurrencies: number, 
		private readonly maxOcurrencies: number, 
		private readonly matchingText: string
	) {}

	validate(password: string): boolean {
		let matchingTextIndex = -1;
		let matchingTextCounter = 0;

		do {
			matchingTextIndex = password.indexOf(this.matchingText, matchingTextIndex + 1);
			if (matchingTextIndex !== -1) {
				matchingTextCounter++;
			}
		} while (matchingTextIndex !== -1);

		const matchesMoreThanMinOcurrencies = matchingTextCounter >= this.minOcurrencies;
		const matchesLessThanMaxOcurrencies = matchingTextCounter <= this.maxOcurrencies;
		
		return matchesLessThanMaxOcurrencies && matchesMoreThanMinOcurrencies;
	}
}