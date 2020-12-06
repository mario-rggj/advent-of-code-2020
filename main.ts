import * as exercise1 from './src/1/exercise-runner';
import * as exercise2 from './src/2/exercise-runner';

console.log('===========================================');
console.log('running exercise 1');
const exerciseOneResults = exercise1.run();
console.log('part one result:', exerciseOneResults.partOne);
console.log('part two result:', exerciseOneResults.partTwo);

console.log('===========================================');
console.log('running exercise 2');
const exerciseTwoResults = exercise2.run();
console.log('part one result:', exerciseTwoResults.partOne);
console.log('part two result:', exerciseTwoResults.partTwo);