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
  photos_id SERIAL,
  link varchar(64),
  alt varchar(128) NOT NULL,

  activity_id INT NOT NULL REFERENCES activity(activity_id),

  photoCreatorInfo_id INT REFERENCES photoCreatorInfo(photoCreatorInfo_id)
);

-- DROP TABLE activity
copy activity FROM '/users/aloysiuslai/tripadvisor-gallery-server/activities.csv' DELIMITER ',' CSV HEADER;

copy photoCreatorInfo FROM '/users/aloysiuslai/tripadvisor-gallery-server/photocreatorinfo.csv' DELIMITER ',' CSV HEADER;

copy photos FROM '/users/aloysiuslai/tripadvisor-gallery-server/photos.csv' DELIMITER ',' CSV HEADER;







