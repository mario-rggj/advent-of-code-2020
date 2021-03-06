import fs from 'fs';
import PassportParser from '../utils/passport-parser';
import BirthYearValidator from '../validators/birth-year-validator';
import CountryIdValidator from '../validators/country-id-validator';
import ExpirationYearValidator from '../validators/expiration-year-validator';
import EyeColorValidator from '../validators/eye-color-validator';
import HairColorValidator from '../validators/hair-color-validator';
import HeightValidator from '../validators/height-validator';
import IssueYearValidator from '../validators/issue-year-validator';
import PassportIdValidator from '../validators/passport-id-validator';

describe('PassportParser', () => {
	describe('Given a valid passport batch input file', () => {
		const passportBatchFilePath = './src/4/utils/passport-batch-file.txt';
		const expectedPassports = [
			{ 
				eyeColor: 'gry', 
				id: '860033327', 
				expirationYear: '2020', 
				hairColor: '#fffffd', 
				birthYear: '1937',
				issueYear: '2017',
				countryId: '147',
				height: '183cm'
			},
			{ 
				eyeColor: 'amb', 
				id: '028048884', 
				expirationYear: '2023', 
				hairColor: '#cfa07d', 
				birthYear: '1929',
				issueYear: '2013',
				countryId: '350',
				height: undefined
			},
			{ 
				eyeColor: 'brn', 
				id: '760753108', 
				expirationYear: '2024', 
				hairColor: '#ae17e1', 
				birthYear: '1931',
				issueYear: '2013',
				countryId: undefined,
				height: '179cm'
			},
			{ 
				eyeColor: 'brn', 
				id: '166559648', 
				expirationYear: '2025', 
				hairColor: '#cfa07d', 
				issueYear: '2011',
				height: '59in'
			}
		];

		beforeEach(() => {
			fs.writeFileSync(passportBatchFilePath,
				'ecl:gry pid:860033327 eyr:2020 hcl:#fffffd\n' +
				'byr:1937 iyr:2017 cid:147 hgt:183cm\n' +
				'\n' +
				'iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884\n' +
				'hcl:#cfa07d byr:1929\n' +
				'\n' +
				'hcl:#ae17e1 iyr:2013\n' +
				'eyr:2024\n' +
				'ecl:brn pid:760753108 byr:1931\n' +
				'hgt:179cm\n' +
				'\n' +
				'hcl:#cfa07d eyr:2025 pid:166559648\n' +
				'iyr:2011 ecl:brn hgt:59in\n');

			
		});

		afterEach(() => {
			fs.rmSync(passportBatchFilePath);
		});

		it('parses file to a passport array', () => {
			const parsedPassports = PassportParser.fromBatchFile(passportBatchFilePath);

			expect(parsedPassports).toEqual(expectedPassports);
		});

		it('parses file to a passport array with validators', () => {
			const parsedPassports = PassportParser.fromBatchFileWithValidators(passportBatchFilePath);
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

			const passportsWithValidators = expectedPassports.map(passport => ({ ...passport, validators }));
			expect(parsedPassports).toEqual(passportsWithValidators);
		});
	});
});