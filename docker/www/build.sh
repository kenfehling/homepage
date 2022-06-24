#!/usr/bin/env bash

# docker build . --tag=kenfehling/homepage --no-cache
docker buildx build --platform linux/amd64,linux/arm64 --tag=kenfehling/homepage --push . 
# docker push kenfehling/homepage