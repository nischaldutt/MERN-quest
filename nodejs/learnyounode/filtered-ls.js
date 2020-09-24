const fs = require('fs');
const path = require('path');

const dirPath = process.argv[2];
const extension = '.' + process.argv[3];

fs.readdir(dirPath, (error, files) => {
  if(error) throw error;
  files.filter(file => path.extname(file) === extension)
    .map(file => console.log(file));
});