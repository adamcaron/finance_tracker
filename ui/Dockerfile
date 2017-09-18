FROM nginx:stable-alpine

WORKDIR /tmp-build

# install deps
COPY package.json .
RUN apk add --no-cache nodejs && \
    npm install

# copy source files
COPY . .

# build static distribution files to be served
RUN node build/build.js && \
    mv dist/* /usr/share/nginx/html

WORKDIR /usr/share/nginx/html

# cleanup build dependencies
RUN rm -rf /tmp-build && \
    apk del nodejs
