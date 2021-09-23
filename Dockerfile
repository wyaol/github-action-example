FROM node:12.16.1
WORKDIR /code
COPY . /code
CMD node github-action-example.js
