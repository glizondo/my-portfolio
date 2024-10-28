# 1. Specify the base image
FROM node:14-alpine AS build

# 2. Set the working directory inside the container
WORKDIR /app

# 3. Copy package.json and package-lock.json
COPY package*.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy the rest of the application code to the container
COPY . .

# 6. Build the React app for production
RUN npm run build

# 7. Use a lightweight Nginx image to serve the static files
FROM nginx:alpine

# 8. Copy the built files from the previous stage to the Nginx HTML directory
COPY --from=build /app/build /usr/share/nginx/html

# 9. Expose port 80 to the outside world
EXPOSE 80

# 10. Start Nginx
CMD ["nginx", "-g", "daemon off;"]
