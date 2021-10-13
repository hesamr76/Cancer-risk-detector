#fronted Dockerfile

FROM node:12 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install -g @quasar/cli

RUN npm i

COPY . .

RUN quasar build


#Serve
FROM nginx:1.17-alpine

COPY ./.docker/nginx.conf /etc/nginx/nginx.template

COPY --from=build /app/dist/spa /usr/share/nginx/html



