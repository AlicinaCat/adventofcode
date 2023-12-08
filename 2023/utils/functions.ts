const readFileData = (fileName) => {
  const fs = require('fs');
  const rows = fs.readFileSync(fileName).toString();
  return rows.split('\n');
}

module.exports = readFileData;