


const getResult = (inputRows) => {
  let sum = 0;
  let cardNumber = 0;

  for (let row of inputRows) {
    console.log(++cardNumber);
    let cardPoints = 0;
    const numbers = row.split(':')[1];
    const winningNumbersRaw = numbers.split('|')[0];
    const lotteryNumbersRaw = numbers.split('|')[1];

    const winningNumbers = winningNumbersRaw.trim().replace(/\s\s+/g, ' ').split(' ');
    const lotteryNumbers = lotteryNumbersRaw.trim().replace(/\s\s+/g, ' ').split(' ');

    const winningSet = new Set(winningNumbers);

    for (let lotteryNumber of lotteryNumbers) {
      if (winningSet.has(lotteryNumber)) {
        if (cardPoints === 0) {
          cardPoints = 1;
        } else {
          cardPoints *= 2;
        }
      }
    }

    console.log('points: ', cardPoints)

    sum += cardPoints;
  }
 
  return sum;
};

module.exports = getResult;

//todo - check why return / param types dont work with tests