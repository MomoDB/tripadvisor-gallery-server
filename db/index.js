// const mysql = require('mysql');
// let { mysqlConfig } = require('../config.js');

// const { host, user, password, database } = mysqlConfig;

// // Re-assign mysqlConfig to default params with no password if config file is not present
// mysqlConfig = {
//   host: process.env.DATABASE_HOST || host,
//   user: process.env.DATABASE_USER || user,
//   password: process.env.DATABASE_PASS || password,
//   database: process.env.DATABASE_NAME || database,
// };

// const db = mysql.createConnection(mysqlConfig);
// db.connect((err) => {
//   if (err) {
//     console.log(err);
//   } else { // eslint-disable-next-line no-console
//     console.log(`Successfully connected to ${mysqlConfig.database} database...`);
//   }
// });


const {Client} = require('pg');

const db = new Client({
  user: 'postgres',
  password: '25638965',
  database: 'tripadvisorgallery',
});

db.connect( (err) => {
  if (err) {
    console.log('Error connecting to psql', err);
  } else {
    console.log('Successfully Connected to psql db');
  }
})

module.exports = db;
