FROM node:10.15.0

VOLUME [ "/source" ]

RUN npm install gulp-cli -g
