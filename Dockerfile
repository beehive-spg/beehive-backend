FROM node:latest AS beehive-backend

WORKDIR /usr/src/backend

COPY . .

EXPOSE 8080

CMD npm install && npm start
