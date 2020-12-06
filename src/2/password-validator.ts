import DatabaseEntry from './database-entry';

export default class PasswordValidator {
	constructor(private readonly databaseEntries: Array<DatabaseEntry>) {}

	calculateValidPasswordAmount(): number {
		return this.databaseEntries.filter((entry) => entry.isValid()).length;
	}
}