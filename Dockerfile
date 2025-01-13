FROM Node:23.0-alpine

COPY . .

RUN npm install --legacy-peer-deps

RUN npm run build

CMD [ "npm", "start" ]