FROM node:18-alpine3.16 AS development

WORKDIR /usr/src/app

COPY product-api/package*.json ./

RUN npm install

COPY product-api .

RUN npm run build

FROM node:18-alpine3.16 as production-product

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY product-api/package*.json ./

RUN npm install --only=prod

COPY product-api ./

COPY product-api/src/proto ./proto

RUN npm run build

RUN npx prisma generate



FROM node:18-alpine3.16 as production-payment

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY payment/package*.json ./

RUN npm install --only=prod

COPY payment .

RUN npm run build

FROM node:18-alpine3.16 as production-auth

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY auth-api/package*.json ./

RUN npm install --only=prod --legacy-peer-deps

COPY auth-api .

RUN npm run build