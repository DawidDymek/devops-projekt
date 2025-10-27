# Używamy oficjalnego obrazu Nginx
FROM nginx:latest

# Kopiujemy plik index.html do katalogu, z którego Nginx serwuje pliki
COPY app/index.html /usr/share/nginx/html/index.html

# Port, na którym działa Nginx
EXPOSE 80

# Domyślna komenda uruchamiająca Nginx
CMD ["nginx", "-g", "daemon off;"]
