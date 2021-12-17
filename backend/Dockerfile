FROM openjdk
WORKDIR /prod/backend/
COPY . /prod/backend/
ARG DEBIAN_FRONTEND=noninteractive

# Instalação do Maven e build do back-end 
RUN apt update
RUN apt install maven -y
RUN mvn clean package

# Deploy do back-end
CMD java -jar ./target/ProjetoBasico-0.0.1-SNAPSHOT.jar
