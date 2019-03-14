#!/bin/sh

# Wait until prisma is avaliable, and download schemas
./docker-scripts/wait-for-it.sh prisma:4466 --timeout=30 -- prisma deploy

graphql get-schema --project prisma

if [ $DEBUG = 1 ]; then

  echo "Running in debug mode"

  # nodemon src/index.js --ext js,graphql --exec babel-node

  # nodemon --ext js,graphql --exec 'prisma deploy && babel-node' src/index.js --delay 2.5 &
  nodemon --ext js,graphql --exec 'babel-node' src/index.js --delay 2.5 &

  graphql playground --port=3001

else

  echo "Running in production mode"

  node src/index.js

fi