FROM nginx
WORKDIR /var/www
COPY ./dist/* ./html

# ARG DEBIAN_FRONTEND=noninteractive

# Instalação do Nginx
# RUN apt update
# RUN apt install nginx
# RUN chown -R $USER:$USER /var/www/maestroerp/html

# # Build e deploy do front-end
# RUN cd ../../prod/frontend/
# RUN npm install
# RUN npm run build
# RUN mv ./dist/* ../../var/www/maestroerp/html