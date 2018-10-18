#!/usr/bin/env bash

docker build . --tag=kenfehling/homepage --no-cache
docker push kenfehling/homepage