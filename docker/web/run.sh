#!/bin/bash
git pull
npm install
pm2 start ./ --no-daemon
