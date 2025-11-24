FROM node:18-alpine

# katalog roboczy w kontenerze
WORKDIR /app

# kopiujemy package.json
COPY package.json .

# instalujemy zależności
RUN npm install

# kopiujemy resztę backendu
COPY . .

EXPOSE 3000

CMD ["node", "server.js"]
