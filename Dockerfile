FROM node:14-alpine AS builder
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY src /app/src
COPY public /app/public
COPY .env /app/
COPY .env.production.local /app/
COPY .eslint** /app/
COPY tsconfig.json /app/
COPY next* /app/

RUN yarn export

FROM nginx:alpine

COPY nginx /etc/nginx

# Set the working directory to the default nginx html directory
WORKDIR /usr/share/nginx/html
# Remove the existing web files
RUN rm -rf ./*
# Copy the files from the static next export
COPY --from=builder /app/out /usr/share/nginx/html
