FROM node:8.12.0-jessie

RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

RUN cd /
RUN git clone https://github.com/kenfehling/homepage.git
RUN cd homepage; npm install; cd server; npm install --depth 0; npm run build

ENTRYPOINT node /homepage/server/build/index.js

EXPOSE 3000
