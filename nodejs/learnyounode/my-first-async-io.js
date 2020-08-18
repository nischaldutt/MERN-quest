const fs = require('fs');

const filePath = process.argv[2];
fs.readFile(filePath, 'utf8', (error, fileData) => {
  if(error) throw error;
  console.log(fileData.split('\n').length - 1);
});