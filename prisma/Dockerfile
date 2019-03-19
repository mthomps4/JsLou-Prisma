FROM ubuntu:latest

WORKDIR /usr/prisma

RUN apt-get update && \
  apt-get install -y sudo systemd

# Install Docker
RUN sudo apt update
RUN sudo apt install -y apt-transport-https ca-certificates curl software-properties-common
RUN curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
RUN sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable"
RUN sudo apt update
RUN apt-cache policy docker-ce
RUN sudo apt install -y docker-ce
RUN sudo systemctl status docker

# Add User to Docker
RUN sudo usermod -aG docker ${USER}
RUN su - ${USER}
RUN id -nG

# Install Node/NPM
RUN sudo apt-get install -y nodejs npm build-essential
RUN npm i -g graphql-cli prisma

COPY . .

EXPOSE 4466

RUN docker-compose up
