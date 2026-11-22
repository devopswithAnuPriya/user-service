
# 1. Select Node.js base image
FROM node:20-alpine

# 2. Set working directory inside container
WORKDIR /app

# 3. Copy package files
COPY package*.json ./

# 4. Install application dependencies
RUN npm install --omit=dev

# 5. Copy application source code
COPY . .

# 6. Document application port
EXPOSE 3000

# 7. Start the application
CMD ["npm", "start"]
