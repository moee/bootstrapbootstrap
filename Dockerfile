FROM node
RUN npm install -g bower grunt-cli
WORKDIR /app
RUN adduser --home /app app
USER app
CMD bower install && npm install && grunt
