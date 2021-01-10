import { ExerciseRunnerResult } from '../utils/exercise-runner-result';
import PassportScanner from './models/passport-scanner';
import PassportParser from './utils/passport-parser';

export function run(passportBatchFilePath = './inputs/4.txt'): ExerciseRunnerResult {
	const passportScanner = new PassportScanner();
	const passports = PassportParser.fromBatchFile(passportBatchFilePath);

	return { 
		partOne: passportScanner.scanPassportBatch(passports),
		partTwo: 0
	};
}