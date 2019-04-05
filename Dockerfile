FROM node:8.11

VOLUME [ "/source" ]

RUN npm install gulp-cli -g
