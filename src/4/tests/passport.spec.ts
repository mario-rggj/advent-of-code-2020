import each from 'jest-each';
import {PassportTestBuilder} from './passport-builder';

describe('Passport', () => {
	describe('Birth Year validation', () => {
		describe('Given invalid birth year', () => {
			each([
				'202',
				'2023',
				'1919',
				'abc',
				'202a',
				'!!',
			])
				.it('when birth year is %s invalidate passport', (birthYear) => {
					const passport = new PassportTestBuilder().withBirthYear(birthYear).build();
					expect(passport.hasValidBirthYear()).toBeFalse();
				});
		});

		describe('Given valid birth year', () => {
			each([
				'2002',
				'1993',
				'1920',
				'1985',
				'1964',
				'2000',
			])
				.it('when birth year is %s', (birthYear) => {
					const passport = new PassportTestBuilder().withBirthYear(birthYear).build();
					expect(passport.hasValidBirthYear()).toBeTrue();
				});
		});
	});

	describe('Issued Year validation', () => {
		describe('Given valid issue year', () => {
			each([
				'2010',
				'2015',
				'2020',
				'2011',
			])
				.it('when issue year is %s', (issueYear) => {
					const passport = new PassportTestBuilder().withIssueYear(issueYear).build();
					expect(passport.hasValidIssueYear()).toBeTrue();
				});
		});

		describe('Given valid issued year', () => {
			each([
				'2000',
				'!!',
				'2009',
				'2021',
				'1999',
			])
				.it('when issue year is %s invalidate passport', (issueYear) => {
					const passport = new PassportTestBuilder().withIssueYear(issueYear).build();
					expect(passport.hasValidIssueYear()).toBeFalse();
				});
		});
	});
});
