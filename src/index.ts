import { sonarData, day2TestData, day2Data } from './data.js';

import {part1, part2} from './day1.js';
import {part1 as day2Part1, part2 as day2Part2} from './day2.js';

console.log(`Day 1 Part 1: Answer ${part1(sonarData)} times.`);
console.log(`Day 1 Part 2: Answer ${part2(sonarData)} times.`);

console.assert(day2Part1(day2TestData) === 150);
console.log(`Day 2 Part 1: Answer ${day2Part1(day2Data)} times.`);

console.assert(day2Part2(day2TestData) === 900);
console.log(`Day 2 Part 2: Answer ${day2Part2(day2Data)} times.`);