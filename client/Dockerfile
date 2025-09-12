# Frontend Dockerfile
FROM node:22.12.0

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source
COPY . .

# Build React app (Vite outputs dist/, CRA outputs build/)
RUN npm run build

# Install serve globally
RUN npm install -g serve

# Use Render's assigned port
EXPOSE 10000

# Serve built app
CMD ["serve", "-s", "dist", "-l", "10000"]
