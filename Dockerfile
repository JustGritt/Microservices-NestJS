FROM node:18-alpine3.16 AS base-product

WORKDIR /usr/src/app

COPY product-api/package*.json ./

RUN npm install

COPY product-api .

RUN npx prisma generate

RUN npm install -g @nestjs/cli

RUN npm run build



FROM node:18-alpine3.16 as production-product
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY product-api/package*.json ./

COPY --from=base-product /usr/src/app/node_modules ./node_modules
COPY --from=base-product /usr/src/app/dist ./dist

COPY product-api .

# RUN npm run build



FROM node:18-alpine3.16 as production-payment

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

# Install the Nest CLI globally
RUN npm install -g @nestjs/cli

COPY payment/package*.json ./

RUN npm install --only=prod

COPY payment .

RUN npm run build



FROM node:18-alpine3.16 as production-auth

WORKDIR /usr/src/app

# Install the Nest CLI globally
RUN npm install -g @nestjs/cli

COPY auth-api/package*.json ./

RUN yarn install

COPY auth-api .

RUN yarn build
