FROM node:22.12.0-slim

COPY package.json package-lock.json /app/
WORKDIR /app

RUN npm ci
RUN npm i -g serve

COPY . /app

RUN npm run build

EXPOSE 3000

CMD ["serve", "-s", "dist"]
