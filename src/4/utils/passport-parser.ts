import Parser from '../../utils/parser';
import Passport from '../models/passport';
import BirthYearValidator from '../validators/birth-year-validator';
import CountryIdValidator from '../validators/country-id-validator';
import ExpirationYearValidator from '../validators/expiration-year-validator';
import EyeColorValidator from '../validators/eye-color-validator';
import HairColorValidator from '../validators/hair-color-validator';
import HeightValidator from '../validators/height-validator';
import IssueYearValidator from '../validators/issue-year-validator';
import PassportIdValidator from '../validators/passport-id-validator';
import Validator from '../validators/validator';

export default class PassportParser {
	static fromBatchFile(batchFilePath: string): Array<Passport> {
		const passportsWithParsedAttributes = PassportParser.parseFileContentIntoAttributes(batchFilePath);

		return passportsWithParsedAttributes.map(passport => 
			new Passport(
				passport.birthYear,
				passport.issueYear,
				passport.expirationYear,
				passport.height,
				passport.hairColor,
				passport.eyeColor,
				passport.id,
				passport.countryId,
			)
		);
	}

	static fromBatchFileWithValidators(batchFilePath: string): Array<Passport> {
		const validators = [
			new BirthYearValidator(),
			new CountryIdValidator(),
			new ExpirationYearValidator(),
			new EyeColorValidator(),
			new HairColorValidator(),
			new HeightValidator(),
			new IssueYearValidator(),
			new PassportIdValidator()
		];

		const passportsWithParsedAttributes = PassportParser.parseFileContentIntoAttributes(batchFilePath);

		return passportsWithParsedAttributes.map(passport => 
			new Passport(
				passport.birthYear,
				passport.issueYear,
				passport.expirationYear,
				passport.height,
				passport.hairColor,
				passport.eyeColor,
				passport.id,
				passport.countryId,
				validators
			)
		);
	}

	private static parseFileContentIntoAttributes(batchFilePath: string) {
		const unparsedPassports = Parser.readFileContent(batchFilePath)
			.split('\n\n')
			.map(passport => {
				return passport
					.split('\n')
					.map(line => line.split(' '))
					.reduce((passports, passportPiece) => {
						return passports.concat(passportPiece);
					});
			});

		const passportsWithSplittedAttributes = unparsedPassports.map(passport => {
			return passport.map(attribute => {
				const [key, value] = attribute.split(':');
				return { key, value };
			});
		});

		const passportsWithParsedAttributes = passportsWithSplittedAttributes.map(passport => {
			const issueYear = PassportParser.findAttribute(passport, 'iyr');
			const birthYear = PassportParser.findAttribute(passport, 'byr');
			const expirationYear = PassportParser.findAttribute(passport, 'eyr');
			const height = PassportParser.findAttribute(passport, 'hgt');
			const hairColor = PassportParser.findAttribute(passport, 'hcl');
			const eyeColor = PassportParser.findAttribute(passport, 'ecl');
			const id = PassportParser.findAttribute(passport, 'pid');
			const countryId = PassportParser.findAttribute(passport, 'cid');

			return {
				birthYear,
				issueYear,
				expirationYear,
				height,
				hairColor,
				eyeColor,
				id,
				countryId
			};
		});
		return passportsWithParsedAttributes;
	}

	private static findAttribute(passport: Array<Record<string, string>>, attributeKey: string): string | undefined {
		return passport.find((attribute) => attribute.key === attributeKey)?.value;
	}
}
