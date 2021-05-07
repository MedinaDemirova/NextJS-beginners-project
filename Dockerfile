FROM node:alpine

WORKDIR /usr/nodeapp

COPY /. /.

RUN npm install && npm run build

CMD ["npm", "start"]