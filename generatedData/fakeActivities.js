const faker = require('faker');
const fs = require('fs');
const v8 = require('v8');
const URL = require('../db_aloysius/pictureURLs.js');

let count = 1;
const writeLine = () => {
  return `${count}, ${faker.lorem.words()}, ${faker.address.city()}\n`;
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


const writeStream = fs.createWriteStream('./CSV/activitiesMongo.csv');
const line1 = 'activity_id, name, location\n';
writeStream.write(line1);
writeNTimes(writeStream, 10000000, () => {
  console.log('written!');
});