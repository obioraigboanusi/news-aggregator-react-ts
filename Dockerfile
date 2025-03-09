FROM node:18-alpine AS builder

RUN corepack enable

WORKDIR /app

COPY package.json yarn.lock .yarnrc.yml* ./

RUN yarn install --immutable

COPY . .

RUN yarn build


FROM node:18-alpine AS runner

RUN corepack enable

WORKDIR /app

RUN yarn global add serve

COPY --from=builder /app/dist /app/dist

EXPOSE 4173

CMD ["serve", "-s", "dist", "-l", "4173"]
