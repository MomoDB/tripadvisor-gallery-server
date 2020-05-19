FROM node:12-alpine
WORKDIR /src/app

COPY package.json .
RUN npm install

COPY . .

ENV DATABASE_HOST='172.17.0.2'
ENV DATABASE_USER='root'
ENV DATABASE_PASS='password'
ENV DATABASE_NAME='tripAdvisorGallery'

EXPOSE 9999
CMD ["npm", "start"]