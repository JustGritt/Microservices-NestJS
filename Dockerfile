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

COPY . .

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/src/main"]



FROM node:18-alpine3.16 as production-payment

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY payment/package*.json ./

RUN npm install --only=prod

COPY payment .

CMD ["node", "dist/src/main"]