const fs = require('fs');
const path = require('path');

module.exports = function(dirPath, extension, callback) {
  fs.readdir(dirPath, (error, files) => {
    if(error) return callback(error);
    const list = files.filter(file => path.extname(file) === '.' + extension);
    callback(null, list);
  });
};
