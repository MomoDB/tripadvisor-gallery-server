const faker = require('faker');
const fs = require('fs');
const v8 = require('v8');


const helpfulPool = [0, 9, 6, 7, 3, 2, 8, 4, 5, 1];
const starPool = [1, 4, 2, 3, 5, 2, 2, 2, 4, 2, 4, 4, 2, 1, 2, 1, 5, 4, 3, 5];
const contributionPool = [1, 8, 14, 4, 3, 2, 8, 13, 5, 14, 8, 2, 3, 7, 4, 12, 6, 8, 8, 10, 12, 10, 14, 10, 11, 11, 3, 4, 3, 0];

let count = 0;

const writeLine = () => {
  return `${count}, Management, 0, ${faker.date.recent()}, "", "", 0, 0\n`;
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


const writeStream = fs.createWriteStream('./photoCreatorInfo.csv');
const line1 = 'photoCreatorInfo_id, username, user_contributions, date_created, review_title, review_description, review_stars, review_helpful_score\n';
writeStream.write(line1);
writeNTimes(writeStream, 1000000, () => {
  console.log('written1!');
});

const writeLine2 = () => {
  return `${count}, ${faker.internet.userName()}, ${contributionPool[count%30]}, ${faker.date.recent()}, ${faker.lorem.word()}, ${faker.lorem.words()}, ${starPool[count%20]}, ${helpfulPool[count%10]} \n`;
};

const writeNTimes2 = (writer, times, callback) => {
  const writeFile = () => {
    let ok = true;
    do {
      times--;
      const data = writeLine2();
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


writeNTimes2(writeStream, 3000000, () => {
  console.log('written!');
});