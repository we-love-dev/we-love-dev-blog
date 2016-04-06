#!/bin/bash

set -m

mongodb_cmd="/usr/bin/mongod"
log_name=$(date +%Y%m%d%H%M%S)
cmd="${mongodb_cmd} --dbpath /data/db --logpath /data/log/${log_name}.log"

if [ "$AUTH" == "yes" ]; then
    cmd="${cmd} --auth"
fi

$cmd &

if [ ! -f /data/db/.mongodb_password_set ]
then
  ADMIN_PASS=${DB_ADMIN_PASS:-$(pwgen -s 18 1)}
  PASS=${DB_PASS:-$(pwgen -s 12 1)}
  _word=$( [ ${DB_PASS} ] && echo "preset" || echo "random" )

  RET=1
  while [[ RET -ne 0 ]]; do
    echo "=> Waiting for confirmation of MongoDB service startup"
    sleep 5
    mongo admin --eval "help" >/dev/null 2>&1
    RET=$?
  done

  echo "=> Creating an admin user with a ${_word} password in MongoDB"
  mongo admin --eval "db.createUser({user: '${DB_ADMIN_NAME}', pwd: '${ADMIN_PASS}', roles:['userAdminAnyDatabase']});"
  mongo $DB_NAME -u ${DB_ADMIN_NAME} -p ${ADMIN_PASS} --authenticationDatabase admin --eval \
    "db.createUser({user: '${DB_USER}', pwd: '${PASS}', roles:['readWrite']});"
  mongo admin --eval "setParameter = enableLocalhostAuthBypass=0"
  mongo admin --eval "auth = true"

  echo "=> Done!"
  touch /data/db/.mongodb_password_set

  echo "========================================================================"
  echo " You can now connect to this MongoDB server using:"
  echo ""
  echo "    mongo ${DB_NAME} -u ${DB_USER} -p ${PASS} --host <host> --port <port>"
  echo ""
  echo "    mongo admin -u ${DB_ADMIN_NAME} -p ${ADMIN_PASS} --host <host> --port <port>"
  echo ""
  echo "========================================================================"
fi

fg
