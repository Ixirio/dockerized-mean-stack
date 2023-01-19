FROM node:19 as build-local

WORKDIR /var/www/app

COPY package*.json .

RUN npm install -g @angular/cli && \
    npm install

COPY . .

CMD [ "npm" "run" "start" ]
