const mongoose = require('mongoose');
const db = mongoose.connection;
mongoose.connect('mongodb://localhost/tripadvisor', { useNewUrlParser: true });
db.on('error', console.error.bind(console, 'connection error:'));
const { Schema } = mongoose;

// db.once('open', function () {
const activitySchema = new Schema({
  activity_id: Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  photos: [{ type: Schema.Types.ObjectId, ref: 'Photos' }]
});

const photoCreatorInfoSchema = new Schema({
  photoCreatorInfo_id: Schema.Types.ObjectId,
  user: String,
  user_contributions: Number,
  date_created: String,
  review_title: String,
  review_description: {
    type: String,
    minlength: 1,
    maxlength: 255
  },
  review_stars: {
    type: Number,
    min: 1,
    max: 5,
  },
  review_helpful_score: Number,
})

const photosSchema = new Schema({
  photo_id: Schema.Types.ObjectId,
  link: String,
  alt: String,
  activity_id: { type: Number, ref: 'Activity' },
  photoCreatorInfo_ids: { type: Number, ref: 'PhotoCreatorInfo' },
});

const Activity = mongoose.model('Activity', activitySchema);
const Photos = mongoose.model('Photos', photosSchema);
const PhotoCreatorInfo = mongoose.model('PhotoCreatorInfo', photoCreatorInfoSchema);
// });


// Create 3 schema
// Write reference that connects them
// Check out articles remi sent
// check to make sure mongo is 5.9

// const gallerySchema = new Schema({
//   activity: { name: String, location: String },
//   photos: [{
//     link: String,
//     alt: String,
//     user: String,
//     user_contributions: Number,
//     date_created: String,
//     review_title: String,
//     review_description: String,
//     review_stars: Number,
//     review_helpful_score: Number,
//   }],
// });

// const galleriesSchema = new Schema({
//   _id: Number,
//   gallery: [gallerySchema],
// });
