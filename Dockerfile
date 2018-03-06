FROM node:alpine

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

CMD node server.js
