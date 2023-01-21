FROM node:16-buster

RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

RUN npm -g install webpack webpack-cli

RUN cd /
RUN git clone https://github.com/kenfehling/homepage.git
RUN cd homepage; npm install --force; cd server; npm install --force; npm run build

ENTRYPOINT node /homepage/server/build/index.js

EXPOSE 3000
