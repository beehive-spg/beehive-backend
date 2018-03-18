FROM node:alpine as build

WORKDIR /app

COPY package.json .

RUN npm install

COPY src src
COPY .babelrc .

RUN npm run build


FROM node:alpine

ARG orders_queue
ARG hop_queue
ARG error_queue
ARG rabbitmq
ARG database

ENV ORDERS_QUEUE=$orders_queue
ENV HOP_QUEUE=$hop_queue
ENV ERROR_QUEUE=$error_queue
ENV RABBITMQ_URL=$rabbitmq
ENV DATABASE_URL=$database

COPY --from=build /app/package.json /

RUN npm install --production

COPY --from=build /app/lib /

EXPOSE 8080

CMD node server.js
