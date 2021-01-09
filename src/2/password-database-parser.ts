import Parser from '../utils/parser';
import DatabaseEntry from './database-entry';
import Policy from './policy';
import SledPolicy from './sled-policy';
import TobogganPolicy from './toboggan-policy';

export enum PolicyParseConfiguration {
	SLED,
	TOBOGGAN
}

export default class PasswordDatabaseParser {
	static fromTxtToPasswordDatabase(filePath: string, policyParseConfiguration: PolicyParseConfiguration): Array<DatabaseEntry> {
		return Parser.fromTxtToStringArray(filePath)
			.map(line => {
				const [policyAsString, password] = line.split(': ');
				const [ocurrencyRulesAsString, matchingText] = policyAsString.split(' ');
				const [minOcurrenciesAsString, maxOcurrenciesAsString] = ocurrencyRulesAsString.split('-');
				const firstRule = Number.parseInt(minOcurrenciesAsString);
				const secondRule = Number.parseInt(maxOcurrenciesAsString);
				const policy = PasswordDatabaseParser.buildPolicy(firstRule, secondRule, matchingText, policyParseConfiguration);

				return new DatabaseEntry(
					policy,
					password
				);
			});
	}


	private static buildPolicy(firstRule: number, secondRule: number, matchingText: string, policyParseConfiguration: PolicyParseConfiguration): Policy {
		switch (policyParseConfiguration) {
		case PolicyParseConfiguration.SLED:
			return new SledPolicy(firstRule, secondRule, matchingText);
		case PolicyParseConfiguration.TOBOGGAN:
			return new TobogganPolicy(firstRule, secondRule, matchingText);
		}

	}
}
