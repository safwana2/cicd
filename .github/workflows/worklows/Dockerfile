# Use an official Node runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files from the current directory
# into the container's working directory
COPY package.json /app/
COPY package-lock.json /app/


COPY . /app/

CMD ["node", "app.js"]
