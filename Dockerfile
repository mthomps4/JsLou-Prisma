FROM node:latest

WORKDIR /usr/src/app

RUN npm i -g graphql-cli prisma nodemon

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . .

RUN chmod -R +x ./docker-scripts/

EXPOSE 4000

ENTRYPOINT [ "./docker-scripts/entrypoint.sh" ]