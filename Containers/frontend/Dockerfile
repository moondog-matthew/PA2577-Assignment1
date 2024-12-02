FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .
#Using port 3000 works... for some reason...
EXPOSE 3000

CMD ["npm", "start"]
