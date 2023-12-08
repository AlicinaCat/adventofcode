const findSpecialCharacters = (input, rowIndex) => {
  //match special characters except for dot (.)
  const specialCharactersRegex = /[^a-zA-Z0-9. ]/g;

  //find all matches of the regex in the input string
  let match;
  let coordinates = {};
  while ((match = specialCharactersRegex.exec(input)) !== null) {

    //add all the adjacent indexes (even if outside)
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        coordinates[`${rowIndex+x}, ${match.index+y}`] = true;
      }
    }
  }

  return coordinates;
}

const findIds = (input, rowIndex) => {
  const digitsRegex = /\b\d+\b/g;
  const matches = [];
  let match;
  while ((match = digitsRegex.exec(input)) !== null) {
    const coordinates = [];
  
    const startIndex = match.index;
    const endIndex = match.index + match[0].length - 1;

    for (let i = startIndex; i <= endIndex; i++) {
      coordinates.push({x: rowIndex, y: i});
    }
  
    matches.push({
      number: match[0],
      coordinates,
    });
  }

  return matches;
}

const getResult = (inputRows) => {

  let sum = 0;
  let specialCharactersDict = {};
  let idsList = [];

  for (let i = 0; i < inputRows.length; i++) {
    //find all special characters positions
    let specialCharacters = findSpecialCharacters(inputRows[i], i);
    specialCharactersDict = { ...specialCharactersDict, ...specialCharacters};

    //find all ids + positions
    let ids = findIds(inputRows[i], i);
    idsList = idsList.concat(ids);
  }
  
  //for every id, check if any position exists in dictionary  
  for (let id of idsList) {
    let found = false;
    for (let idCoordinate of id.coordinates) {
      if (specialCharactersDict[`${idCoordinate.x}, ${idCoordinate.y}`]) {
        found = true;
        break;
      }
    }

    if (found) sum += parseInt(id.number);
  } 

  return sum;
};

module.exports = getResult;

//todo - check why return / param types dont work with tests