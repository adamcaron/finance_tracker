FROM node:alpine

WORKDIR /ui

# install deps
COPY package.json .
RUN npm install

# copy source files
COPY . .

ENTRYPOINT [ "node" ]
CMD [ "build/dev-server.js" ]