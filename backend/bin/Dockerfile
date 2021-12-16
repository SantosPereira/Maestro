FROM openjdk
WORKDIR /prod/backend/
COPY . /prod/backend/
ARG DEBIAN_FRONTEND=noninteractive

RUN apt install maven -y
RUN mvn clean package
