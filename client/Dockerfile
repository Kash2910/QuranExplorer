# Frontend Dockerfile
FROM node:22.12.0

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the source
COPY . .

# --- Verification Step ---
# This line will print the value of VITE_API_URL during the build process.
# Check your Render deploy logs for this output.
# If it's empty or missing, the variable is not being passed correctly to the build environment.
RUN echo "Build-time VITE_API_URL is: '$VITE_API_URL'"

# Fail the build if the environment variable is not set.
# This is a safety measure to prevent deploying a misconfigured frontend.
RUN test -n "$VITE_API_URL" || (echo "Error: VITE_API_URL is not set. Build failed." && exit 1)

# Build the React app
# Vite will replace `import.meta.env.VITE_API_URL` with the value of the $VITE_API_URL variable here.
RUN npm run build

# Install 'serve' to run the static site
RUN npm install -g serve

# Expose the port Render will use
EXPOSE 10000

# Command to serve the built application
CMD ["serve", "-s", "dist", "-l", "10000"]
