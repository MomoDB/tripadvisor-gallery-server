import http from 'k6/http';
import { check, sleep } from 'k6';
export let options = {
  // stages: [
  //   { duration: ‘2m’, target: 75 },
  //   { duration: ‘2m’, target: 90 },
  //   { duration: ‘2m’, target: 110 },
  //   { duration: ‘2m’, target: 130 },
  // ],
  vus: 100,
  duration: '1m',
};
export default function() {
  let activity = Math.floor(Math.random() * 10000000);
  let res = http.get(`http://localhost:9999/tripadvisor/${activity}/gallery`);
  check(res, {
    'Status 200: ': (result) => result.status == 200,
    'Error Rate': (r) => r.status !== 200,
    'Transaction time < 2000ms: ': (result) => result.timings.duration < 2000,
    })
    sleep(.1);
};

// scp -i "FEC_Key_File.pem" /Users/aloysiuslai/tripadvisor-gallery-server/generatedData/CSV/activities.csv  ec2-user@13.58.122.136:/home/ec2-user/dataFiles/

// scp -i "FEC_Key_File.pem" /Users/aloysiuslai/tripadvisor-gallery-server/generatedData/CSV/photoCreatorInfo.csv  ec2-user@13.58.122.136:/home/ec2-user/dataFiles/

// scp -i "FEC_Key_File.pem" /Users/aloysiuslai/tripadvisor-gallery-server/generatedData/CSV/photos8.csv  ec2-user@13.58.122.136:/home/ec2-user/dataFiles/

// scp -i "FEC_Key_File.pem" /Users/aloysiuslai/tripadvisor-gallery-server/generatedData/CSV/photos9.csv  ec2-user@13.58.122.136:/home/ec2-user/dataFiles/