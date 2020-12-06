import Parser from '../utils/Parser';
import DatabaseEntry from './database-entry';
import Policy from './policy';

export default class PasswordDatabaseParser {
	static fromTxtToPasswordDatabase(filePath: string): Array<DatabaseEntry> {
		return Parser.fromTxtToStringArray(filePath)
			.map(line => {
				const [policyAsString, password] = line.split(': ');
				const [ocurrencyRulesAsString, matchingText] = policyAsString.split(' ');
				const [minOcurrenciesAsString, maxOcurrenciesAsString] = ocurrencyRulesAsString.split('-');
				const minOcurrencies = Number.parseInt(minOcurrenciesAsString);
				const maxOcurrencies = Number.parseInt(maxOcurrenciesAsString);
				const policy = new Policy(minOcurrencies, maxOcurrencies, matchingText);

				return new DatabaseEntry(
					policy,
					password
				);
			});
	}

}