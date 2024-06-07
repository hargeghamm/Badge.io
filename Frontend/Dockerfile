# Use the official Node.js image as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# (Optional) Install serve to serve the build
RUN npm install -g serve

# Expose the port if necessary
EXPOSE 3000

# Command to start the application (if serving the build)
CMD ["serve", "-s", "build"]
