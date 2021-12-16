FROM node
WORKDIR /prod/frontend/
COPY . /prod/frontend/
ARG DEBIAN_FRONTEND=noninteractive

RUN apt install nginx
# RUN start nginx
RUN npm install
RUN npm run build
