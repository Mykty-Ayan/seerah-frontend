FROM node:18-alpine AS build
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# Use Nginx as the production server
FROM nginx:alpine
# Copy the built files from the build stage to the nginx www directory
COPY --from=build /app/dist /usr/share/nginx/html
# Expose port 80
EXPOSE 80
# The CMD instruction sets the default command to run when the container starts
CMD ["nginx", "-g", "daemon off;"]