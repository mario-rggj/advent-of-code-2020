import Parser from '../../utils/parser';
import Passport from '../models/passport';

export default class PassportParser {
	static fromBatchFile(batchFilePath: string): Array<Passport> {
		return Parser.readFileContent(batchFilePath)
			.split('\n\n')
			.map(passport => {
				return passport
					.split('\n')
					.map(line => line.split(' '))
					.reduce((passports, passportPiece) => {
						return passports.concat(passportPiece);
					});
			})
			.map(passport => {
				return passport.map(attribute => {
					const [key, value] = attribute.split(':');
					return { key, value };
				});
			})
			.map(passport => {
				const issueYear = PassportParser.findAttribute(passport, 'iyr');
				const birthYear = PassportParser.findAttribute(passport, 'byr');
				const expirationYear = PassportParser.findAttribute(passport, 'eyr');
				const height = PassportParser.findAttribute(passport, 'hgt');
				const hairColor = PassportParser.findAttribute(passport, 'hcl');
				const eyeColor = PassportParser.findAttribute(passport, 'ecl');
				const id = PassportParser.findAttribute(passport, 'pid');
				const countryId = PassportParser.findAttribute(passport, 'cid');

				return {
					issueYear,
					birthYear,
					expirationYear,
					height,
					hairColor,
					eyeColor,
					id,
					countryId
				};
			});
	}

	private static findAttribute(passport: Array<Record<string, string>>, attributeKey: string): string | undefined {
		return passport.find((attribute) => attribute.key === attributeKey)?.value;
	}
}
