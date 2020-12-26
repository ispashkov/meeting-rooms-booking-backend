FROM node:alpine

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY . .

RUN yarn build

EXPOSE 8080
CMD ["node", "dist/main"]