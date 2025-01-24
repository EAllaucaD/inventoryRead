# Use an official lightweight Node.js image
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies first
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the application source code into the container
COPY . .

# Expose the service on port 3012
EXPOSE 3012

# Start the application
CMD ["node", "src/app.js"]
