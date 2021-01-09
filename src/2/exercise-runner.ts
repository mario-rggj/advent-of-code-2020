import { ExerciseRunnerResult } from '../utils/exercise-runner-result';
import PasswordDatabaseParser, { PolicyParseConfiguration } from './password-database-parser';
import PasswordValidator from './password-validator';

export function run(filePath = './inputs/2.txt'): ExerciseRunnerResult {
	const sledParsedDatabase = PasswordDatabaseParser.fromTxtToPasswordDatabase(filePath, PolicyParseConfiguration.SLED);
	const tobogganParsedDatabase = PasswordDatabaseParser.fromTxtToPasswordDatabase(filePath, PolicyParseConfiguration.TOBOGGAN);
	const sledPasswordValidator = new PasswordValidator(sledParsedDatabase);
	const tobogganPasswordValidator = new PasswordValidator(tobogganParsedDatabase);
	return {
		partOne: sledPasswordValidator.calculateValidPasswordAmount(),
		partTwo: tobogganPasswordValidator.calculateValidPasswordAmount()
	};
}
