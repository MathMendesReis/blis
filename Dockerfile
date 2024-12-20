FROM node:20.15.1

WORKDIR /usr/src/app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

