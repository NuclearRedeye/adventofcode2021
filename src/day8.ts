const match = [2, 3, 4, 7];

function getMatches(data: string, matches: number[] = match): number {
  let retVal = 0;
  const segments = data.substring(data.indexOf('|') +1).trim().split(' ');
  for (const segment of segments) {
    if (matches.includes(segment.trim().length)) {
      retVal += 1;
    }
  }
  return retVal;
}

export function part1(data: string[]): number {
  let retVal = 0;
  for (const entry of data) {
    retVal += getMatches(entry, match);
  }
  return retVal;
}

export function part2(data: string[]): number {
  return -1;
}