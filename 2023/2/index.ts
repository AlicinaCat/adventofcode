const getResult = require('./cubeConundrum.ts');
const readFileData = require('../utils/functions.ts')

const fs = require('fs');
const contents = readFileData('./data.txt');
console.log(getResult(contents));