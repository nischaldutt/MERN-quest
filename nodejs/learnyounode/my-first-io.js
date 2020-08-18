const fs = require('fs');
const filePath = process.argv[2];
const buffer = fs.readFileSync(filePath);
const fileData = buffer.toString();
const length = fileData.length;
let count = 0;
for(let i=0;i<length;i++) {
  if(fileData[i] === '\n')
    count++;
}
console.log(count);