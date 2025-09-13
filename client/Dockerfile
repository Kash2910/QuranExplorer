# Frontend Dockerfile
FROM node:22.12.0

WORKDIR /app

# Install dependencies first
COPY package*.json ./
RUN npm install

# Copy env file explicitly so Vite can read it
COPY .env .env

# Copy the rest of the source
COPY . .

# Build React app (Vite outputs dist/, CRA outputs build/)
RUN npm run build

# Install serve globally
RUN npm install -g serve

# Use Render's assigned port (Render sets PORT env var)
EXPOSE 10000

# Serve built app on Render's PORT
CMD ["sh", "-c", "serve -s dist -l $PORT"]
