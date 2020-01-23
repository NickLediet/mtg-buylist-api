FROM node:12

WORKDIR /app

ADD ./package.json .
ADD ./package-lock.json .
ADD ./tsconfig.json tsconfig.json

RUN npm install

COPY src src

EXPOSE 3000

CMD [ "npm", "run", "start:dev" ]
