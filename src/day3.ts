const BITMASK_MAX = 2048;

function getNumberOfBitmaskMatches(data: number[], bitmask: number) {
  let retVal = 0;
  for (let value of data) {
    retVal += (value & bitmask) ? 1 : 0;
  }
  return retVal
}

export function part1(data: number[], bitmask: number = BITMASK_MAX): number {
  let mostCommonBit = 0;
  let leastCommonBit = 0;

  for (; bitmask >= 1; bitmask = bitmask / 2) {
    let count = getNumberOfBitmaskMatches(data, bitmask);

    // If count is 0 and this isn't the least significant bit, then continue.
    if (count === 0 && bitmask > 1) {
      continue
    }

    if (count >= (data.length / 2)) {
      mostCommonBit = mostCommonBit | bitmask;
    } else {
      leastCommonBit = leastCommonBit | bitmask;
    }
  }

  return mostCommonBit * leastCommonBit;
}

function filterByMostCommonBit(data: number[], bitmask: number = BITMASK_MAX): number {
  if (data.length > 1) {

    // Get the number of entries in the array that matche the bitmask
    let count = getNumberOfBitmaskMatches(data, bitmask);

    // No matches but this isn't the least significant bit, then recurse.
    if (count === 0 && bitmask > 1) {
      return filterByMostCommonBit(data, bitmask / 2);
    }
    
    // Otherwise recurse filter the array keeping only entries that match the most common bit
    return filterByMostCommonBit((count >= (data.length / 2)) ? data.filter(value => value & bitmask) : data.filter(value => !(value & bitmask)), bitmask / 2);
  }

  return data[0];
}

function filterByLeastCommonBit(data: number[], bitmask: number = BITMASK_MAX): number {
  if (data.length > 1) {

    // Get the number of entries in the array that matche the bitmask
    let count = getNumberOfBitmaskMatches(data, bitmask);

    // No matches but this isn't the least significant bit, then recurse.
    if (count === 0 && bitmask > 1) {
      return filterByLeastCommonBit(data, bitmask / 2);
    }

    // Otherwise recurse filter the array keeping only entries that match the least common bit
    return filterByLeastCommonBit((count >= (data.length / 2)) ? data.filter(value => !(value & bitmask)) : data.filter(value => value & bitmask), bitmask / 2);
  }

  return data[0];
}

export function part2(data: number[]): number {
  return filterByMostCommonBit(data) * filterByLeastCommonBit(data);
}