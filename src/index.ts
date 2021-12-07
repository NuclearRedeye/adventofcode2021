import { day1TestData, day1Data } from './data/day1.js';
import { day2TestData, day2Data } from './data/day2.js';
import { day3TestData, day3Data } from './data/day3.js';
import { day4TestData, day4TestCards, day4Data, day4Cards } from './data/day4.js';
import { day5TestData, day5Data } from './data/day5.js';
import { day6TestData, day6Data } from './data/day6.js';
import { day7TestData, day7Data } from './data/day7.js';

import {part1 as day1Part1, part2 as day1Part2} from './day1.js';
import {part1 as day2Part1, part2 as day2Part2} from './day2.js';
import {part1 as day3Part1, part2 as day3Part2} from './day3.js';
import {part1 as day4Part1, part2 as day4Part2} from './day4.js';
import {part1 as day5Part1, part2 as day5Part2} from './day5.js';
import {part1 as day6Part1, part2 as day6Part2} from './day6.js';
import {part1 as day7Part1, part2 as day7Part2} from './day7.js';

console.assert(day1Part1(day1TestData) === 7);
console.log(`Day 1 Part 1: Answer ${day1Part1(day1Data)} times.`);

console.assert(day1Part2(day1TestData) === 5);
console.log(`Day 1 Part 2: Answer ${day1Part2(day1Data)} times.`);

console.assert(day2Part1(day2TestData) === 150);
console.log(`Day 2 Part 1: Answer ${day2Part1(day2Data)} times.`);

console.assert(day2Part2(day2TestData) === 900);
console.log(`Day 2 Part 2: Answer ${day2Part2(day2Data)} times.`);

console.assert(day3Part1(day3TestData) === 198);
console.log(`Day 3 Part 1: Answer ${day3Part1(day3Data)} times.`);

console.assert(day3Part2(day3TestData) === 230);
console.log(`Day 3 Part 2: Answer ${day3Part2(day3Data)} times.`);

console.assert(day4Part1(day4TestData, day4TestCards) === 4512);
console.log(`Day 4 Part 1: Answer is ${day4Part1(day4Data, day4Cards)}.`);

console.assert(day4Part2(day4TestData, day4TestCards) === 1924);
console.log(`Day 4 Part 2: Answer is ${day4Part2(day4Data, day4Cards)}.`);

console.assert(day5Part1(day5TestData) === 5);
console.log(`Day 5 Part 1: Answer is ${day5Part1(day5Data)}.`);

console.assert(day5Part2(day5TestData) === 12);
console.log(`Day 5 Part 2: Answer is ${day5Part2(day5Data)}.`);

console.assert(day6Part1(day6TestData, 18) === 26);
console.assert(day6Part1(day6TestData, 80) === 5934);
console.log(`Day 6 Part 1: Answer is ${day6Part1(day6Data)}.`);

console.assert(day6Part2(day6TestData, 256) === 26984457539);
console.log(`Day 6 Part 2: Answer is ${day6Part2(day6Data, 256)}.`);

console.assert(day7Part1(day7TestData) === 37);
console.log(`Day 7 Part 1: Answer is ${day7Part1(day7Data)}.`);

console.assert(day7Part2(day7TestData) === 168);
console.log(`Day 7 Part 2: Answer is ${day7Part2(day7Data)}.`);
