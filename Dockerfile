FROM node:current-alpine3.18
WORKDIR /usr/src/app
COPY build ./
EXPOSE 80
CMD [ "/bin/sh", "-c", "cd /usr/src/app && node server.js"]