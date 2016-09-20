#!/bin/bash
git pull
git submodule foreach git pull origin master
npm install
pm2 start ./ --no-daemon
