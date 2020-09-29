FROM node:12.16.1 AS build-env
ADD . /app
WORKDIR /app
RUN npm install --production

FROM gcr.io/distroless/nodejs
COPY --from=build-env /app /app
COPY --from=build-env /app/public/ /public/
WORKDIR /app
EXPOSE 80
CMD [ "node", "index.js" ]