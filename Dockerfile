FROM node:latest AS BUILD_IMAGE
WORKDIR /usr/src/app
COPY ./ ./
COPY package*.json ./
RUN npm install
RUN npm run build

EXPOSE 80
CMD [ "/bin/sh", "-c", "cd /usr/src/app && node server.js"]



