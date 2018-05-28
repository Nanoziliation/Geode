FROM node:latest

ENV HOME=/home/app
WORKDIR $HOME/geode

COPY . $HOME/geode

EXPOSE 8000
