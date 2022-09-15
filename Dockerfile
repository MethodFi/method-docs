FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

VOLUME $PWD:/usr/src/app:rw

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]

