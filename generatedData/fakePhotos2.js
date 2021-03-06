const faker = require('faker');
const fs = require('fs');
const v8 = require('v8');
const URL = require('../db_aloysius/pictureURLs.js');


const activityPool = [8, 11, 12, 9, 8, 10, 10, 11, 9, 12];
let count = 2000000;

const writeLine = () => {
  return `${URL[(count + 1) % 810]}, ${faker.lorem.words()}, ${Math.floor(Math.random() * 10000000)}, ${Math.ceil(Math.random() * 4000000)}\n`;
};

const checkMemoryNative = () => {
  console.log("Memory Usage: ", process.memoryUsage());
};

const printHeapStats = () => {
  console.log('Heap Status', v8.getHeapSpaceStatistics());
};

const writeNTimes = (writer, times, callback) => {
  const writeFile = () => {
    let ok = true;
    do {
      times--;
      const data = writeLine();
      count++;
      if (times === 0) {
        writer.write(data, 'utf-8', callback);
      } else {
        ok = writer.write(data, 'utf-8');
        if(!ok) {
          checkMemoryNative();
        }
      }
    } while (times > 0 && ok);
    if (times > 0) {
      writer.once('drain', writeFile);
    }
  };
  writeFile();
};


// const writeStream = fs.createWriteStream('./CSV/photos3.csv');
// const line1 = 'photos_id, link, alt , activity_id, photoCreatorInfo_id\n';
// writeStream.write(line1);
// writeNTimes(writeStream, 10, () => {
//   console.log('written!');
// });

for (let x = 0; x < 10; x++) {
  const writeStream = fs.createWriteStream(`./CSV/photos${x}.csv`);
  const line1 = 'link, alt , activity_id, photoCreatorInfo_id\n';
  writeStream.write(line1);
  writeNTimes(writeStream, 10000000, () => {
    console.log(`written! ${x}`);
  });
}