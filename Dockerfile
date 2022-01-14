FROM node:current-alpine3.14 as builder

WORKDIR /app

COPY package.json .

RUN yarn

COPY src /app/src
COPY public /app/public
COPY .env* /app/
COPY .eslint** /app/
COPY tsconfig.json /app/
COPY next* /app/

RUN yarn export

FROM caddy:alpine

COPY --from=builder /app/out /srv
COPY caddy.json .

CMD [ "caddy", "run", "--config", "caddy.json" ]