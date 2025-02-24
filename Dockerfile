FROM node:22 AS build
WORKDIR /app 
COPY . . 
RUN npm install && npm run build

FROM nginx:1.27.1-alpine-slim
COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/docker/nginx_default.conf /etc/nginx/conf.d/default.conf