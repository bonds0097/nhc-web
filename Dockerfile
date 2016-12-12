FROM golang:1.7.3

RUN apt-get update
RUN apt-get -y install nodejs

RUN npm install -g bower grunt-cli

ENV APP_DIR /etc/nhc-web
RUN mkdir $APP_DIR

COPY settings/settings.json $APP_DIR

# Copy the local package files to the container's workspace.
COPY . /go/src/github.com/bonds0097/nhc-web
WORKDIR /go/src/github.com/bonds0097/nhc-web

RUN grunt build


