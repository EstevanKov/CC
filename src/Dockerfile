FROM NODE:20.17.0

WORKDIR /apps
COPY package*.json ./
RUN npm install

COPY .. /apps/

RUN npm run buil

EXPOSE 3000

CMD npm start