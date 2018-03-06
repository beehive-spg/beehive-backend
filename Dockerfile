FROM node:alpine

# WORKDIR /app

COPY package.json .

RUN npm install --production

ARG orders_queue
ARG hop_queue
ARG rabbitmq
ARG database

ENV ORDERS_QUEUE=$orders_queue
ENV HOP_QUEUE=$hop_queue
ENV RABBITMQ_URL=$rabbitmq
ENV DATABASE_URL=$database

COPY lib .

EXPOSE 8080
# COPY .env .

CMD node server.js

# FROM node:latest AS beehive-backend

# WORKDIR /usr/src/backend

# COPY . .

# EXPOSE 8080

# CMD npm install && npm start
