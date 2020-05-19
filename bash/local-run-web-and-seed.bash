docker run -d -p 80:9999 --name galleryweb --rm tripadvisorgallery
docker exec galleryweb npm run seed
open -a "Google Chrome" http://0.0.0.0