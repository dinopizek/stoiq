FROM node:alpine

WORKDIR /stoiq

COPY . .

RUN npm init -y && \
    npm install express bootstrap bootstrap-icons && \
    sed -i 's/"keywords": \[\]/"keywords": ["Stoiq"]/' package.json && \
    sed -i 's/"author": ""/"author": "Dino Pizek"/' package.json && \
    sed -i 's/"name": ".*"/"name": "Stoiq"/' package.json

EXPOSE 3000

CMD ["node", "server.js"]
