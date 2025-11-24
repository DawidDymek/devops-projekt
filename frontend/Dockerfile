# --- ETAP 1: Builder ---
FROM node:18-alpine AS builder
WORKDIR /app

# Jeśli masz pliki statyczne (HTML), kopiujemy je
COPY . .

# --- ETAP 2: Production image ---
FROM nginx:alpine
COPY --from=builder /app /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
