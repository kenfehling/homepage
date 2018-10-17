FROM node:8.12.0-jessie

RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

RUN git clone https://github.com/kenfehling/homepage.git

ENTRYPOINT java -jar /opt/selenium/selenium-server-standalone.jar

EXPOSE 4444
