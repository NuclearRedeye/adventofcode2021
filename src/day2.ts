
type Vector = {
  x: number;
  y: number;
  z: number;
}

const wordSpaceDigit = new RegExp(/^(\w+) (\d+)$/);

function getMoveAsVector(data: string) : Vector {
  let retVal = {
    x: 0,
    y: 0,
    z: 0
  };

  const match = data.match(wordSpaceDigit);
  if (match) {
    switch (match[1]) {
      case 'forward':
        retVal.x += parseInt(match[2]);
        break;
      case 'up':
        retVal.y -= parseInt(match[2]);
        break;
      case 'down':
        retVal.y += parseInt(match[2]);
        break;
      default:
        console.error(`getMoveAsVector(): invalid input '${data}'`);
    }
  }

  return retVal;
}

export function part1(data: string[]): number {
  const retVal: Vector = {
    x: 0,
    y: 0,
    z: 0
  };

  for (let i = 0; i < data.length; i++) {
    const move = getMoveAsVector(data[i]);
    retVal.x += move.x;
    retVal.y += move.y;
  }

  return retVal.x * retVal.y;
}

function getMoveAsVector2(data: string, vector: Vector) {
  const match = data.match(wordSpaceDigit);
  if (match) {
    switch (match[1]) {
      case 'forward':
        vector.x += parseInt(match[2]);
        vector.y += vector.z * parseInt(match[2]);
        break;
      case 'up':
        vector.z -= parseInt(match[2]);
        break;
      case 'down':
        vector.z += parseInt(match[2]);
        break;
      default:
        console.error(`getMoveAsVector(): invalid input '${data}'`);
    }
  }
}

export function part2(data: string[]): number {
  const retVal: Vector = {
    x: 0,
    y: 0,
    z: 0
  };

  for (let i = 0; i < data.length; i++) {
    getMoveAsVector2(data[i], retVal);
  }

  return retVal.x * retVal.y;
}