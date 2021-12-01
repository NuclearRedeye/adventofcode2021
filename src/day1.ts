function getSlidingWindow(data: number[], offset: number, items: number = 3) {
  let retVal = [];
  if (offset + items <= data.length ) {
    for (let i = offset; i < offset + items; i++) {
      retVal.push(data[i]);
    }
  }
  return retVal;
}

function getTotal(data: number[]) {
  return data.reduce((acc, value) => acc + value);
}

export function part1(data: number[]) {
  let retVal = 0;
  let previous = data[0];

  for ( let i = 0; i < data.length; i++) {
    let current = data[i];
    if (current > previous) {
      retVal += 1;
    }
    previous = current;
  }

  return retVal;
}

export function part2(data: number[]) {
  let retVal = 0;
  let previous = getTotal(getSlidingWindow(data, 0));
  for (let i = 0; i < data.length; i++) {
    const window = getSlidingWindow(data, i);
    if (window.length) {
      let current = getTotal(window);
      if (current > previous) {
        retVal += 1;
      }
      previous = current;
    }
  }

  return retVal;
}