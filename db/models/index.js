const db = require('../index.js');

const addActivity = ({ name, location }, callback) => {
  const query = `insert into activity(name, location) values("${name}","${location}")`;
  db.query(query, (err, success) => {
    if (err) {
      throw new Error(err);
    } else {
      callback(success.insertId);
    }
  });
};

const addPhotoCreatorInfo = (info, callback) => {
  /* eslint-disable camelcase */
  const {
    user, user_contributions, date_created, review_title,
    review_description, review_stars, review_helpful_score,
  } = info;

  const query = `insert into photoCreatorInfo(user, user_contributions, date_created, review_title, review_description, review_stars, review_helpful_score) values("${user}", ${user_contributions}, "${date_created}", "${review_title}", "${review_description}", ${review_stars}, ${review_helpful_score})`;
  /* eslint-disable camelcase */

  db.query(query, (err, success) => {
    if (err) {
      throw new Error(err);
    } else {
      callback(success.insertId);
    }
  });
};

const addPhoto = (photoObj, activity_id, photoCreatorInfo_id, callback) => {
  const { link, alt } = photoObj;
  const query = `insert into photos(link, alt, activity_id, photoCreatorInfo_id) values('${link}', '${alt}', ${activity_id}, ${photoCreatorInfo_id})`;
  db.query(query, (err) => {
    if (err) {
      callback(err);
    } else {
      callback(null);
    }
  });
};

const queryDbForGalleryData = (id, callback) => {

      const photosQuery = `SELECT photos.link, photos.alt, photoCreatorInfo.username, photoCreatorInfo.user_contributions, photoCreatorInfo.date_created, photoCreatorInfo.review_title, photoCreatorInfo.review_description, photoCreatorInfo.review_stars, photoCreatorInfo.review_helpful_score FROM photos, activity, photoCreatorInfo WHERE photos.activity_id=activity.activity_id and photos.photoCreatorInfo_id=photoCreatorInfo.photoCreatorInfo_id and activity.activity_id=${id}`;
      db.query(photosQuery, (photosQueryErr, photos) => {
        if (photosQueryErr) {
          callback(photosQueryErr);
        } else {
          const galleryData = { photos };
          callback(null, galleryData);
        }
      });

};


module.exports.addActivity = addActivity;
module.exports.addPhotoCreatorInfo = addPhotoCreatorInfo;
module.exports.addPhoto = addPhoto;
module.exports.queryDbForGalleryData = queryDbForGalleryData;
