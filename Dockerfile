FROM node:18.0-slim

WORKDIR /app
COPY package.json /app/package.json
RUN npm install 
COPY . /app/
EXPOSE 3000

CMD [ "node", "index.js" ]
