FROM node:latest AS BUILD_IMAGE
WORKDIR /usr/src/app
COPY ./ ./
RUN npm install
RUN npm run build

FROM node:current-alpine
COPY --from=BUILD_IMAGE node_modules ./
COPY --from=BUILD_IMAGE build ./
EXPOSE 80
CMD [ "/bin/sh", "-c", "cd /usr/src/app && node server.js"]
