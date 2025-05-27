FROM node:20-alpine

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 4001

CMD ["npm","start", "run", "dev","--host","0.0.0.0","--port","4001","--reload"]