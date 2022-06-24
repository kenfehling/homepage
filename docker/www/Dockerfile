FROM node:14.16.0-buster

RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

RUN npm -g install webpack webpack-cli

RUN cd /
RUN git clone https://github.com/kenfehling/homepage.git
RUN mkdir -p ~/.ssh
RUN ssh-keygen -F github.com || ssh-keyscan github.com >>~/.ssh/known_hosts
RUN cd homepage; npm install; cd server; npm install --depth 0; npm run build

ENTRYPOINT node /homepage/server/build/index.js

EXPOSE 3000
