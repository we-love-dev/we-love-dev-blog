#!/bin/bash
git pull
git submodule update --init --recursive
git submodule foreach git pull origin master
cd src
npm install
gulp build
pm2 start ./ --no-daemon
