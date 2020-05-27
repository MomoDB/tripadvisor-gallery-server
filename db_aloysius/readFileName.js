const pictures = './pictures/';
const fs = require('fs');
var string = ' ';
var array = [];


fs.readdir(pictures, (err, files) => {
  files.forEach(file => {
    array.push(`'${file}'\n`);
  });
  fs.writeFile('./pictureURLs.js', array, function(err) {
    if (err) {
      return console.log(err);
    } else {
      console.log('file saved');
    }
  });
});
