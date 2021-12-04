

function onCardWin(card: number[][], value: number): number {
  let total = 0;
  for (let column = 0; column < card.length; column++) {
    for (let row = 0; row < card[column].length; row++) {
      if (card[column][row] >= 0) {
        total += card[column][row];
      }
    }
  }
  return total * value;
}

function hasCardWon(card: number[][]): boolean {

  // Check the rows
  for (let column = 0; column < card.length; column++) {
    let rowTotal = 0;
    for (let row = 0; row < card[column].length; row++) {
      rowTotal += card[column][row];
    }
    if (rowTotal <= -5) {
      return true;
    }
  }

  // Check the columns
  for (let row = 0; row < card[0].length; row++) {
    let columnTotal = 0;
    for (let column = 0; column < card.length; column++) {
      columnTotal += card[column][row];
    }
    if (columnTotal <= -5) {
      return true;
    }
  }

  return false;
}

function updateCard(card: number[][], value: number) : void {
  for (let column = 0; column < card.length; column++) {
    for (let row = 0; row < card[column].length; row++) {
      if (card[column][row] === value) {
        card[column][row] = -1;
      }
    }
  }
}

export function part1(data: number[], cards: number[][][]): number {
  for (const number of data) {
    for (const card of cards) {
      updateCard(card, number);
      if (hasCardWon(card)) {
        return onCardWin(card, number);
      }
    }
  }
  return -1;
}

export function part2(data: number[], cards: number[][][]): number {
  let cardsStillToWin = cards;
  for (const number of data) {
    // Update all the cards
    for (const card of cardsStillToWin) {
      updateCard(card, number);
    }

    // Next filter out any winners, but ONLY if there is more than one card remaining.
    if (cardsStillToWin.length > 1) {
      cardsStillToWin = cardsStillToWin.filter((card) => {
        return !hasCardWon(card)
      });
    }

    // If there is exactly 1 card left, then wait for its win conditions to be met.
    if (cardsStillToWin.length === 1) {
      if (hasCardWon(cardsStillToWin[0])) {
        return onCardWin(cardsStillToWin[0], number);
      }
    }

    // FIXME: if all the remaining cards win on the same number then this will fail.
    if (cardsStillToWin.length === 0) {
      break;
    }
  }
  return -1;
}