const getColorNumber = (round, color) => {
  const pattern = new RegExp(`(\\d+)\\s+${color}`);
  const match = pattern.exec(round);
  if (match && match[1]) {
    return parseInt(match[1], 10);
  } else {
    return 0;
  }
}

const getResult = (inputRows) => {
  const maxRedCubes = 12;
  const maxGreenCubes = 13;
  const maxBlueCubes = 14;

  let sum = 0;

  for (let i = 0; i < inputRows.length; i++) {
    let row = inputRows[i];
    let currentHighestRedNumber = 0;
    let currentHighestGreenNumber = 0;
    let currentHighestBlueNumber = 0;

    //get game id
    let gameId = parseInt(row.substring(row.indexOf(' ') + 1, row.lastIndexOf(':')));
    console.log('game id', gameId);

    //get each round
    let roundsString = row.split(':')[1];
    let rounds = roundsString.split(';');

    //for each round, get each color value
    for (let j = 0; j < rounds.length; j++) {
      let greenNumber = getColorNumber(rounds[j], 'green');
      let redNumber = getColorNumber(rounds[j], 'red');
      let blueNumber = getColorNumber(rounds[j], 'blue');

      if (greenNumber > currentHighestGreenNumber) currentHighestGreenNumber = greenNumber;
      if (redNumber > currentHighestRedNumber) currentHighestRedNumber = redNumber;
      if (blueNumber > currentHighestBlueNumber) currentHighestBlueNumber = blueNumber;
    };
    
    //check if possible
    if (currentHighestGreenNumber <= maxGreenCubes && currentHighestRedNumber <= maxRedCubes &&
      currentHighestBlueNumber <= maxBlueCubes) {
        //if yes, sum
        console.log('summing', sum, '+', gameId)
        sum += gameId;
    }
  }

  return sum;
};

module.exports = getResult;

//todo - check why return / param types dont work with tests