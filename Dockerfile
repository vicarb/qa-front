# Use an official Node runtime as the base image
FROM node:18-alpine

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json into the working directory
COPY package.json package-lock.json ./

# Install app dependencies
RUN npm ci --production

# Copy the rest of your app's source code
COPY . ./

# Build the app (if needed)
RUN npm run build

# Expose port 3001 for the app to be served
EXPOSE 8080

ENV PORT=8080
# Define the command to run your app using CMD which defines your runtime
CMD ["npm", "start"]

