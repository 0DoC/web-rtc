FROM node:20
WORKDIR /usr/src/app
COPY build ./
RUN npm install && npm run build
EXPOSE 80
CMD [ "/bin/sh", "-c", "cd /usr/src/app && node server.js"]