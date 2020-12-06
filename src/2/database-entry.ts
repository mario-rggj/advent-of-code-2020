import Policy from './policy';

export default class DatabaseEntry {

	constructor(
		private readonly policy: Policy,
		private readonly password: string
	) { }

	isValid(): boolean {
		return this.policy.validate(this.password);
	}
}