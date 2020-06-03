DROP DATABASE IF EXISTS tripAdvisorGallery;

CREATE DATABASE tripAdvisorGallery;
grant all privileges on database tripadvisorgallery to postgres;
\c tripadvisorgallery


CREATE TABLE activity (
  activity_id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  location VARCHAR(255) NOT NULL
);

CREATE TABLE photoCreatorInfo (
  photoCreatorInfo_id SERIAL PRIMARY KEY,
  username VARCHAR(255),
  user_contributions INT NULL,
  date_created VARCHAR(255),
  review_title varchar(255) NULL,
  review_description varchar(255) NULL,
  review_stars SMALLINT NULL,
  review_helpful_score INT NULL
);

CREATE TABLE photos (
  photos_id SERIAL PRIMARY KEY,
  link varchar(64),
  alt varchar(128) NOT NULL,

  activity_id INT NOT NULL,
  -- REFERENCES activity(activity_id),

  photoCreatorInfo_id INT
  -- REFERENCES photoCreatorInfo(photoCreatorInfo_id)
);

-- DROP TABLE activity
copy activity (name, location) FROM '/users/aloysiuslai/tripadvisor-gallery-server/generatedData/CSV/activities.csv' DELIMITER ',' CSV HEADER;

copy photoCreatorInfo (username, user_contributions, date_created, review_title, review_description, review_stars, review_helpful_score) FROM '/users/aloysiuslai/tripadvisor-gallery-server/generatedData/CSV/photocreatorinfo.csv' DELIMITER ',' CSV HEADER;

copy photos (link, alt, activity_id, photoCreatorInfo_id) FROM '/users/aloysiuslai/tripadvisor-gallery-server/generatedData/CSV/photos0.csv' DELIMITER ',' CSV HEADER;

copy photos (link, alt, activity_id, photoCreatorInfo_id) FROM '/users/aloysiuslai/tripadvisor-gallery-server/generatedData/CSV/photos1.csv' DELIMITER ',' CSV HEADER;

copy photos (link, alt, activity_id, photoCreatorInfo_id) FROM '/users/aloysiuslai/tripadvisor-gallery-server/generatedData/CSV/photos2.csv' DELIMITER ',' CSV HEADER;

copy photos (link, alt, activity_id, photoCreatorInfo_id) FROM '/users/aloysiuslai/tripadvisor-gallery-server/generatedData/CSV/photos3.csv' DELIMITER ',' CSV HEADER;

copy photos (link, alt, activity_id, photoCreatorInfo_id) FROM '/users/aloysiuslai/tripadvisor-gallery-server/generatedData/CSV/photos4.csv' DELIMITER ',' CSV HEADER;

copy photos (link, alt, activity_id, photoCreatorInfo_id) FROM '/users/aloysiuslai/tripadvisor-gallery-server/generatedData/CSV/photos5.csv' DELIMITER ',' CSV HEADER;

copy photos (link, alt, activity_id, photoCreatorInfo_id) FROM '/users/aloysiuslai/tripadvisor-gallery-server/generatedData/CSV/photos6.csv' DELIMITER ',' CSV HEADER;

copy photos (link, alt, activity_id, photoCreatorInfo_id) FROM '/users/aloysiuslai/tripadvisor-gallery-server/generatedData/CSV/photos7.csv' DELIMITER ',' CSV HEADER;

copy photos (link, alt, activity_id, photoCreatorInfo_id) FROM '/users/aloysiuslai/tripadvisor-gallery-server/generatedData/CSV/photos8.csv' DELIMITER ',' CSV HEADER;

copy photos (link, alt, activity_id, photoCreatorInfo_id) FROM '/users/aloysiuslai/tripadvisor-gallery-server/generatedData/CSV/photos9.csv' DELIMITER ',' CSV HEADER;

CREATE INDEX activityIdx
On activity (activity_id);

CREATE INDEX managementIdx
on photoCreatorInfo (username);

CREATE INDEX photosIdx
ON photos (activity_id);

CREATE INDEX photosByCreatorIdx
ON photos (photocreatorinfo_id);

