type Cell = {
  x: number;
  y: number;
};

// Helper function to create a cell
function createCell(x: number, y: number): Cell {
  return {
    x, y
  }
}

// Returns true if the 2 supplied cells are the same
function cellsAreEqual(a: Cell, b: Cell): boolean {
  return (a.x === b.x && a.y === b.y);
}

// Gets the neighbours of the specified cell
function getNeighbours(data: number[][], cell: Cell): Cell[] {
  let retVal: Cell[] = [];
  if (cell.y - 1 >= 0) {
    retVal.push(createCell(cell.x, cell.y - 1));
  }
  if (cell.y + 1 < data.length) {
    retVal.push(createCell(cell.x, cell.y + 1));
  }
  if (cell.x - 1 >= 0) {
    retVal.push(createCell(cell.x - 1, cell.y));
  }
  if (cell.x + 1 < data[cell.y].length) {
    retVal.push(createCell(cell.x + 1, cell.y));
  }
  return retVal;
}

// Iterates over the data and returns the cells that represent the low points, e.g. all neighbour cells have a greater value.
function getLowPoints(data: number[][]): Cell[] {
  const retVal: Cell[] = [];
  for (let column = 0; column < data.length; column++) {
    for (let row = 0; row < data[column].length; row++) {
      const neighbours = getNeighbours(data, createCell(row, column));
      if (neighbours.filter(neighbour => data[neighbour.y][neighbour.x] <= data[column][row]).length === 0) {
        retVal.push( {
          x: row,
          y: column
        });
      }
    }
  }
  return retVal;
}

// Uses a Frontier approach to fan out and find all neighbour cells that are part of the same basin from the specified start point. Could be optimised.
function getBasinFromLowPoint(data: number[][], cell: Cell): Cell[] {
  let visted: Cell[] = [];
  let next: Cell[] = [cell];
  while (next.length > 0) {
    const current = next.pop() as Cell;
    const neighbours = getNeighbours(data, current);

    for (const neighbour of neighbours) {

      // Check we've not already visited this Cell...
      let visited = false;
      for (const value of visted) {
        if (cellsAreEqual(neighbour, value)) {
          visited = true;
          break;
        }
      }

      // And make sure that this cell isn't already queued...
      let queued = false;
      for (const value of next) {
        if (cellsAreEqual(neighbour, value)) {
          queued = true;
          break;
        }
      }

      // Skip if already queued or visited.
      if (visited || queued) {
        continue
      }
      
      // If the value is below the target, 9 in this case, then add it to queue.
      if (data[neighbour.y][neighbour.x] < 9) {
        next.push(neighbour);
      }
    };

    visted.push(current);
  }
  return visted;
}

export function part1(data: number[][]): number {
  let retVal = 0;
  const lowPoints = getLowPoints(data);
  for(const lowPoint of lowPoints) {
    retVal += (1 + data[lowPoint.y][lowPoint.x]);
  }
  return retVal;
}

export function part2(data: number[][]): number {
  const lowPoints = getLowPoints(data);
  const basins = []
  for (const lowPoint of lowPoints) {
    basins.push(getBasinFromLowPoint(data, lowPoint).length);
  }

  // TODO: Clean this up
  const sorted = basins.sort((a, b) => b - a);
  let retVal = 1;
  for (let i = 0; i < 3; i++) {
    retVal *= sorted[i];
  }
  return retVal;
}