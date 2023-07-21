FROM node:current-alpine3.18
WORKDIR /usr/src/app
COPY ./ ./
RUN npm install
EXPOSE 443
CMD [ "/bin/sh", "-c", "cd /usr/src/app && node server.js"]
