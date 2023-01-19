FROM node:19-alpine as base

WORKDIR /var/www/api

COPY package*.json .

RUN npm install

COPY . .

FROM base as build-local

CMD ["npm", "run", "dev"]

FROM base as build-prod

CMD ["npm", "run", "start"]
