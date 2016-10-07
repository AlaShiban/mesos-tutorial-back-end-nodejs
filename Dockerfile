FROM mhart/alpine-node


WORKDIR /src
ADD . .

RUN npm install

EXPOSE 8080
CMD ["node", "server.js"]