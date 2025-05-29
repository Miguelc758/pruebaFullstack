FROM node:20-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Etapa de producción
FROM nginx:alpine
ADD ./client/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /var/www/app/
EXPOSE 4001
CMD ["nginx", "-g", "daemon off;"]
