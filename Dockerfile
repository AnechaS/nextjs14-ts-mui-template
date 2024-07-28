FROM node:18.20.3-slim AS builder

WORKDIR /app
COPY . ./

RUN npm i -g yarn
RUN yarn install && yarn build

FROM node:18.20.3-slim

WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/yarn.lock ./

RUN npm i -g yarn
RUN yarn install --prod

EXPOSE  3000

ENTRYPOINT ["yarn", "start"]