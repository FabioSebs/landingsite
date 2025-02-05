FROM node:22.6

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install

RUN curl -fsSL https://deno.land/x/install/install.sh | sh

# Copy the rest of the application code to the working directory
COPY . .

# Copy .env file to the container
COPY .env .env

# Build the Next.js application
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run the application
CMD npm start
