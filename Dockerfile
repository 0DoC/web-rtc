FROM node:20
WORKDIR /usr/src/app
COPY build ./
EXPOSE 80
CMD [ "/bin/sh", "-c", "cd /usr/src/app && node server.js"]