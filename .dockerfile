FROM node:alpine

ENV NODE_ENV=production

WORKDIR /src
COPY package*.json ./

RUN npm ci
COPY . .

CMD [ "node", "index.js" ]