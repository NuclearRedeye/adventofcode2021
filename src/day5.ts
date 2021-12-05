
type Point = {
  x: number;
  y: number;
}

export enum Directions {
  NONE = 0,
  HORIZONTAL = 1,
  VERTICAL = 2,
  DIAGONAL = 4
}


// Gets the largest value in the supplied array
function getMax(data: number[][][], index: number): number {
  let retVal = -1;
  for (const dataSet of data) {
    for (const point of dataSet) {
      if (point[index] > retVal) {
        retVal = point[index]
      }
    }
  }
  return retVal;
}

// Gets the largest value in the supplied array for the X axis
function getMaxX(data: number[][][]): number {
  return getMax(data, 0);
}

// Gets the largest value in the supplied array for the Y axis
function getMaxY(data: number[][][]): number {
  return getMax(data, 1);
}

// Creates a Point from the supplied array. This does no validation so is not a robost solution!
function arrayToPoint(data: number[]): Point {
  return {
    x: data[0],
    y: data[1]
  }
}

// Creates a buffer to store data based on the maximum x and y values in the supplied data.
function createBuffer(data: number[][][]) {
  const maxX = getMaxX(data) + 1;
  const maxY = getMaxY(data) + 1;

  const buffer: number[][] = new Array(maxY);
  for (let i = 0; i < maxY; i++) {
    buffer[i] = new Array(maxX).fill(0);
  }

  return buffer;
}

// Plots the supplied line in the supplied buffer using ths supplied mask to limit directions to those desired.
function plotInBuffer(buffer: number[][], line: number[][], directionMask: number = 0): void {
  const point1: Point = arrayToPoint(line[0]);
  const point2: Point = arrayToPoint(line[1]);

  // Line is horizontal
  if (point1.y === point2.y && directionMask & Directions.HORIZONTAL) {
    const start = (point2.x > point1.x) ? point1 : point2;
    const end = (point2.x > point1.x) ? point2 : point1;
    for (let x = start.x; x <= end.x; x++) {
      buffer[start.y][x] += 1;
    }
  }
  // Line is vertical
  else if (point1.x === point2.x && directionMask & Directions.VERTICAL) {
    const start = (point2.y > point1.y) ? point1 : point2;
    const end = (point2.y > point1.y) ? point2 : point1;
    for (let y = start.y; y <= end.y; y++) {
      buffer[y][start.x] += 1;
    }
  }
  // Line is diagonal
  else if (Math.abs(point1.x - point2.x) === Math.abs(point1.y - point2.y) && directionMask & Directions.DIAGONAL) {
    const stepX = (point2.x > point1.x) ? 1 : -1;
    const stepY = (point2.y > point1.y) ? 1 : -1;
    let x = point1.x;
    let y = point1.y;
    for (let count = point1.x; count != point2.x; (point2.x > point1.x) ? count++ : count--) {
      buffer[y][x] += 1;
      x += stepX;
      y += stepY;
    }
    // FIXME: There is likely a better way to make this part of the above loop rather than a follow up step.
    buffer[y][x] += 1;
  }
}

// Counts the number of values in the supplied array that are equal to or more than the target number.
function getNumberOfCellsAboveTarget(buffer: number[][], target: number): number {
  let retVal = 0;
  for (let column of buffer) {
    for (let row of column) {
      if (row >= target) {
        retVal++;
      }
    }
  }
  return retVal;
}

export function part1(data: number[][][]): number {
  // Create a new buffer, and zero fill.
  const buffer = createBuffer(data);

  // Analyse the points, and update the counters in the buffer
  for (const dataSet of data) {
    plotInBuffer(buffer, dataSet, Directions.HORIZONTAL | Directions.VERTICAL); 
  }

  return getNumberOfCellsAboveTarget(buffer, 2);
}

export function part2(data: number[][][]): number {
  // Create a new buffer, and zero fill.
  const buffer = createBuffer(data);

  // Analyse the points, and update the counters in the buffer
  for (const dataSet of data) {
    plotInBuffer(buffer, dataSet, Directions.HORIZONTAL | Directions.VERTICAL | Directions.DIAGONAL);
  }

  return getNumberOfCellsAboveTarget(buffer, 2);
}