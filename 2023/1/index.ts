const getResult = require('./trebuchet.ts');
const readFileData = require('../utils/functions.ts')

const fs = require('fs');
const contents = readFileData('./data.txt');
console.log(getResult(contents));