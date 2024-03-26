FROM node:18-alpine AS build
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# Use Nginx as the production server
FROM nginx:alpine
# Remove the default nginx configuration
RUN rm /etc/nginx/conf.d/default.conf
# Copy the custom nginx configuration
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
# Copy the built files from the build stage to the nginx www directory
COPY --from=build /app/dist /usr/share/nginx/html
# Expose port 80
EXPOSE 80
# The CMD instruction sets the default command to run when the container starts
CMD ["nginx", "-g", "daemon off;"]