type Group = {
  daysUntilReproduce: number;
  numOfFish: number;
}

type School = Group[];

// Updates, or creates if required, the specified number of fish to the correct group in the specified school.
function createFish(school: School, daysUntilReproduce: number, numOfFish: number = 1) {

  // Check if a group already exists with the specified age, if so add the fish to the existing group.
  for (let i = 0; i < school.length; i++) {
    if (school[i].daysUntilReproduce === daysUntilReproduce) {
      school[i].numOfFish += numOfFish;
      return;
    }
  }

  // Otherwise, create a new group with the specified number of fish.
  school.push({
    daysUntilReproduce, 
    numOfFish
  });
}

// Decrements the day numOfFisher for each group in the specified school.   
function decrement(school: School) {
  for (let i = 0; i < school.length; i++) {
    school[i].daysUntilReproduce -= 1;
  }
}

// Checks for any groups that are ready to spawn, and updates the specified school.
function reproduce(school: School) {
  for (let i = 0; i < school.length; i++) {
    if (school[i].daysUntilReproduce < 0) {
      createFish(school, 6, school[i].numOfFish)
      school[i].daysUntilReproduce = 8;
      school[i].numOfFish = school[i].numOfFish;
      return;
    }
  }
}

// Gets the total number of fish in the specified school.
function numFishInSchool(school: School): number {
  let retVal = 0;
  for (let i = 0; i < school.length; i++) {
    retVal += school[i].numOfFish;
  }
  return retVal;
}

export function part1(data: number[], days: number = 80): number {

  const school: School = [];
  for (let i = 0; i < data.length; i++) {
    createFish(school, data[i]);
  }

  for (let i = 0; i < days; i++) {
    decrement(school);
    reproduce(school);
  }

  return numFishInSchool(school);
}


export const part2 = part1;