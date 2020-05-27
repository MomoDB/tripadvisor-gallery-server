const fs = require('fs');
const v8 = require('v8');

const writeLine = () => {
  return `Line!, Line!, Line!, Line!\n`
}

const checkMemoryNative = () => {
  console.log("Memory Usage: ", process.memoryUsage())
}

const printHeapStats = () => {
  console.log('Heap Status', v8.getHeapSpaceStatistics())
}

writeNTimes = (writer, times, callback) => {
  const writeFile = () => {
    let ok = true;
    do {
      times--;
      const data = writeLine();
      if (times === 0) {
        writer.write(data, 'utf-8', callback);
      } else {
        ok = writer.write(data, 'utf-8')
        if(!ok) {
          checkMemoryNative();
        }
      }
    } while (times > 0 && ok);
    if (times > 0) {
      writer.once('drain', writeFile)
    }
  }
  writeFile();
}


const writeStream = fs.createWriteStream('./test.csv')
const line1 = 'Test\n';
writeStream.write(line1);
writeNTimes(writeStream, 1000, ()=>{
  console.log('written!')
})