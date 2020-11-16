FROM node:10.20.1-alpine3.9

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

RUN npm ci
RUN npm run build
RUN npm install -g serve

EXPOSE 5000

CMD [ "serve", "-s","-l","tcp://0.0.0.0", "build" ]