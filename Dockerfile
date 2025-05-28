FROM node:20-alpine

WORKDIR /app

COPY . .

RUN npm install 

EXPOSE 4001

CMD ["npm","start", "--host","0.0.0.0","--port","4001","--reload"]