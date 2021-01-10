import Passport from '../models/passport';
import PassportScanner from '../models/passport-scanner';

describe('PassportScanner', () => {
	describe('Given a passport array', () => {
		it('counts the amount of valid passports', () => {
			const passportScanner = new PassportScanner();
			const passports = [
				{
					'issueYear': '2017',
					'birthYear': '1937',
					'expirationYear': '2020',
					'height': '183cm',
					'hairColor': '#fffffd',
					'eyeColor': 'gry',
					'id': '860033327',
					'countryId': '147'
				},
				{
					'issueYear': '2013',
					'birthYear': '1929',
					'expirationYear': '2023',
					'hairColor': '#cfa07d',
					'eyeColor': 'amb',
					'id': '028048884',
					'countryId': '350'
				},
				{
					'issueYear': '2013',
					'birthYear': '1931',
					'expirationYear': '2024',
					'height': '179cm',
					'hairColor': '#ae17e1',
					'eyeColor': 'brn',
					'id': '760753108'
				},
				{
					'issueYear': '2011',
					'expirationYear': '2025',
					'height': '59in',
					'hairColor': '#cfa07d',
					'eyeColor': 'brn',
					'id': '166559648'
				}
			];

			const validPassportsCount = passportScanner.scanPassportBatch(passports as Passport[]);

			expect(validPassportsCount).toEqual(2);
		});
	});
});