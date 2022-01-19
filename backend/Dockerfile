FROM openjdk
WORKDIR /prod/backend/
COPY ./target/ProjetoBasico-0.0.1-SNAPSHOT.jar ./
# ARG DEBIAN_FRONTEND=noninteractive

# Instalação do Maven e build do back-end 
# RUN apt update
# RUN apt install maven -y
# RUN mvn clean package

# Deploy do back-end
CMD java -jar ./ProjetoBasico-0.0.1-SNAPSHOT.jar
