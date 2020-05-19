# build the image and run containers from the image
docker stop galleryweb gallerydb
docker ps -aq | xargs docker rm
docker-compose up --build -d
docker stop galleryweb gallerydb
docker ps -aq | xargs docker rm

