import { ExerciseRunnerResult } from '../utils/exercise-runner-result';
import Passport from './models/passport';
import PassportScanner from './models/passport-scanner';
import PassportParser from './utils/passport-parser';

export function run(passportBatchFilePath = './inputs/4.txt'): ExerciseRunnerResult {
	const passportScanner = new PassportScanner();
	const passports = PassportParser.fromBatchFile(passportBatchFilePath);
	const passportWithValidators = PassportParser.fromBatchFileWithValidators(passportBatchFilePath);

	return { 
		partOne: passportScanner.scanPassportBatch(passports),
		partTwo: passportScanner.validatePassportBatch(passportWithValidators)
	};
}