FROM node:18.15-alpine

WORKDIR /loggerGen

COPY ./package.json .
RUN npm install

COPY . .

EXPOSE 3001

CMD npm start