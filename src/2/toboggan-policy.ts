import Policy from './policy';

export default class TobogganPolicy implements Policy {
	constructor(
		private readonly firstOcurrency: number,
		private readonly secondOcurrency: number,
		private readonly matchingText: string
	) { }

	validate(password: string): boolean {
		const matchesFirstOcurrency = password.charAt(this.firstOcurrency - 1) === this.matchingText;
		const matchesSecondOcurrency = password.charAt(this.secondOcurrency - 1) === this.matchingText;
		const oneMatches = matchesFirstOcurrency || matchesSecondOcurrency;
		const bothMatches = matchesFirstOcurrency && matchesSecondOcurrency;

		return oneMatches && !bothMatches;
	}
}