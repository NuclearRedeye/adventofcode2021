import { day1TestData, day1Data } from './data/day1.js';
import { day2TestData, day2Data } from './data/day2.js';

import {part1 as day1Part1, part2 as day1Part2} from './day1.js';
import {part1 as day2Part1, part2 as day2Part2} from './day2.js';

console.assert(day1Part1(day1TestData) === 7);
console.log(`Day 1 Part 1: Answer ${day1Part1(day1Data)} times.`);

console.assert(day1Part2(day1TestData) === 5);
console.log(`Day 1 Part 2: Answer ${day1Part2(day1Data)} times.`);

console.assert(day2Part1(day2TestData) === 150);
console.log(`Day 2 Part 1: Answer ${day2Part1(day2Data)} times.`);

console.assert(day2Part2(day2TestData) === 900);
console.log(`Day 2 Part 2: Answer ${day2Part2(day2Data)} times.`);