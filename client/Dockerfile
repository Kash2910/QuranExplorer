# Frontend Dockerfile
FROM node:22.12.0

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

RUN npm run build

# Serve with a lightweight static server
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "-s", "dist"]
