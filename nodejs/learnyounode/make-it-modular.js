const mymodule = require('./mymodule');

const dirPath = process.argv[2];
const extension = process.argv[3];

mymodule(dirPath, extension, (error, files) => {
  if(error) throw error;
  files.map(file => console.log(file));
})