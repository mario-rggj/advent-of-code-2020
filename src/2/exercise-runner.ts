import { ExerciseRunnerResult } from '../utils/exercise-runner-result';
import Parser from '../utils/Parser';
import PasswordDatabaseParser from './password-database-parser';
import PasswordValidator from './password-validator';

export function run(filePath = './src/2/password-database.txt'): ExerciseRunnerResult {
	const parsedDatabase = PasswordDatabaseParser.fromTxtToPasswordDatabase(filePath);
	const passwordValidator = new PasswordValidator(parsedDatabase);
	return { 
		partOne: passwordValidator.calculateValidPasswordAmount(),
		partTwo: 0
	};
}