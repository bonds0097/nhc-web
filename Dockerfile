FROM golang:1.7.3

RUN apt-get update && apt-get -y install nodejs \
    npm \
    build-essential \
    ruby \
    ruby-dev \
    zlib1g-dev \
    liblzma-dev

RUN ln -s /usr/bin/nodejs /usr/bin/node
RUN npm update -g npm

RUN gem install sass
RUN gem install compass

RUN npm install -g bower grunt-cli

ENV APP_DIR /etc/nhc-web
RUN mkdir $APP_DIR

COPY settings/settings.json $APP_DIR

# Copy the local package files to the container's workspace.
COPY . /go/src/github.com/bonds0097/nhc-web
WORKDIR /go/src/github.com/bonds0097/nhc-web/angular

RUN npm install
RUN bower install --allow-root
RUN grunt build

RUN mkdir /var/www
RUN cp -R ./dist /var/www/nhc-web/

# Get Glide
RUN curl https://glide.sh/get | sh

WORKDIR /go/src/github.com/bonds0097/nhc-web

# Install dependencies.
RUN glide install

RUN go install github.com/bonds0097/nhc-web
ENTRYPOINT /go/bin/nhc-web -env=dev

EXPOSE 8443
EXPOSE 8080
