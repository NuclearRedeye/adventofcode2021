function getFuel(data: number, average: number): number {
  let retVal = 0;
  if (data !== average) {
    retVal = Math.abs(data - average)
  }
  return retVal;
}

export function part1(data: number[]): number {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const fuelByNumber: number[] = [];
  for (let i = min; i <= max; i++){
    let fuel = 0;
    for (const item of data) {
      fuel += getFuel(item, i);
    }
    fuelByNumber.push(fuel)
  }
  return Math.min(...fuelByNumber);;
}

export function part2(data: number[]): number {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const fuelByNumber: number[] = [];
  for (let i = min; i <= max; i++){
    let fuel = 0;
    for (const item of data) {
      const steps = getFuel(item, i);
      for (let ii = 1; ii <= steps; ii++) {
        fuel += (1 * ii);
      }
    }
    fuelByNumber.push(fuel)
  }
  return Math.min(...fuelByNumber);
}