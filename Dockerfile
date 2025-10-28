# --- ETAP 1: Builder ---
FROM node:18-alpine AS builder
WORKDIR /app

# Skopiuj pliki aplikacji do katalogu roboczego
COPY app /app

# (Tu można by było dodać npm install / npm run build, jeśli byłby frontend JS)

# --- ETAP 2: Production image ---
FROM nginx:alpine

# Skopiuj gotowe pliki z etapu buildera do Nginx
COPY --from=builder /app /usr/share/nginx/html

# Otwórz port 80 (serwer www)
EXPOSE 80

# Uruchom Nginx w trybie pierwszoplanowym
CMD ["nginx", "-g", "daemon off;"]
