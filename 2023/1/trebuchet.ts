const isDigit = (value) => {
  return !isNaN(value);
}

const getResult = (inputRows) => {
  let firstDigit = '';
  let lastDigit = '';
  let sum = 0;
  
  //loop through the rows
  for (let i = 0; i < inputRows.length; i++) {
    let row = inputRows[i];

    //find first element
    for (let k = 0; k < row.length; k++) {
      if (isDigit(row[k])) {
        firstDigit = row[k];
        break;
      }
    }

    //find second element
    for (let j = row.length - 1; j >= 0; j--) {
      if (isDigit(row[j])) {
        lastDigit = row[j];      
        break;  
      }
    }

    let newdigit = parseInt(firstDigit.concat(lastDigit));
    //sum
    sum += parseInt(firstDigit.concat(lastDigit));
  }
  
  return sum;
}

module.exports = getResult;