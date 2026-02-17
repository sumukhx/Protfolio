# Stage 1: Build the React application
# Use node image to build the frontend
FROM node:20-alpine AS builder

WORKDIR /app

# Copy dependency definitions
COPY frontend/package.json frontend/package-lock.json ./

# Install dependencies (legacy-peer-deps needed for date-fns/react-day-picker conflict)
RUN npm install --legacy-peer-deps

# Copy the rest of the frontend source code
COPY frontend/ ./

# Build the app
RUN npm run build

# Stage 2: Serve the application
# Use Nginx to serve the static files
FROM nginx:alpine

# Copy the build output from the builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# Copy custom Nginx configuration to support React Router
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 (Render expects web services to listen on port 80 or $PORT)
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
