
# 1. Select Node.js base image
FROM node:20-alpine

# 2. Set working directory
WORKDIR /app

# 3. Copy package files
COPY package*.json ./

# 4. Install dependencies
RUN npm install --omit=dev

# 5. Copy application source code
COPY . .

# 6. Document Gateway port
EXPOSE 3003

# 7. Start Gateway Service
CMD ["npm", "start"]
