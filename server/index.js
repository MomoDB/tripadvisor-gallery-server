const express = require('express');
const compression = require('compression');
const cache = require('express-cache-controller');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');
const { getGalleryForActivityId } = require('./controllers');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(cache({maxAge: 31536000}));
app.use(compression());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/tripAdvisor/:activityId/gallery', getGalleryForActivityId);

app.listen(9999, () => console.log('Gallery Server is running on Port 9999...'));

module.exports = app;
