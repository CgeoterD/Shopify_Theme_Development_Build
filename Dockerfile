# Use the official Node image as a parent image
FROM node:20.12.1

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json (if available)
COPY package.json ./

# Install any dependencies
RUN npm install

# Copy the rest of your application's code
COPY . .

