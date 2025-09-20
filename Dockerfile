# --- Runtime image ---
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production \
    PORT=3000 \
    HOSTNAME=0.0.0.0

# Copy only the necessary files from the build output
COPY .next/standalone ./
COPY .next/static ./.next/static

EXPOSE 3000
CMD ["node", "server.js"]


