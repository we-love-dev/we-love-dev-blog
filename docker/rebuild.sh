#!/bin/bash

source env.sh
docker-compose build we-love-dev-web && docker-compose up -d
