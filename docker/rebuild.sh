#!/bin/bash

DB_ADMIN_NAME=admin \
DB_ADMIN_PASS=admin \
DB_NAME=we-love-dev \
DB_USER=we-love-dev \
DB_PASS=we-love-dev \
docker-compose build we-love-dev-web && docker-compose up -d
