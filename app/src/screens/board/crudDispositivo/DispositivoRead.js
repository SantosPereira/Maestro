import React, { useState, useEffect, Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button, DataTable } from "react-native-paper";
import axios from "axios";

export default function DispositivoRead({ navigation }) {
  var [dados, setDados] = useState([]);
  var header = new Headers();
  header.append("Access-Control-Allow-Origin", "*");

  useEffect(() => {
    axios
      .get("http://localhost:8080/dispositivo/listar", header)
      .then((resposta) => {
        setDados(resposta.data);
        // console.log(dados);
      })
      .catch((resposta) => {
        alert("Não foi possível acessar o servidor")
      });
    });
    
    function apagarDispositivo(id) {
      axios
      .get("http://localhost:8080/dispositivo/remover/" + id, header)
      .then((resposta) => {
        console.log(dados);
      })
      .catch((resposta) => {
        alert("Não foi possível acessar o servidor")
      });
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.titulo}>Dispositivos</Text> */}
      <Button style={{marginTop: 30}} onPress={() => {navigation.navigate('Cadastrar dispositivo')}}>Adicionar dispositivo</Button>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Nome</DataTable.Title>
          <DataTable.Title>IMEI</DataTable.Title>
          <DataTable.Title>Modelo</DataTable.Title>
          <DataTable.Title>Ações</DataTable.Title>
        </DataTable.Header>
        {dados.map((dado) => {
          return (
            <DataTable.Row key={dado.id}>
              <DataTable.Cell>{dado.nome}</DataTable.Cell>
              <DataTable.Cell>{dado.imei}</DataTable.Cell>
              <DataTable.Cell>{dado.modelo}</DataTable.Cell>
              <DataTable.Cell>
                <Button
                color="white"
                style={styles.botaoUpdate}
                onPress={() => {navigation.navigate('Modificar dispositivo', dado.id)}}
                >Modificar</Button>
                <Button
                color="white"
                style={styles.botaoDelete}
                onPress={() => {apagarDispositivo(dado.id)}}
                >Apagar</Button>
              </DataTable.Cell>
            </DataTable.Row>
          );
        })}
      </DataTable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
  },
  titulo: {
    fontSize: 45,
    marginTop: -400,
    marginBottom: 50,
  },
  acoes: {
    display: "flex",
    flexDirection: "column",
  },
  botaoUpdate: {
    display: "flex",
    flexDirection: "column",
    fontSize: 10,
    padding: -10,
    backgroundColor: "rgb(100,230,100)"
  },
  botaoDelete: {
    display: "flex",
    flexDirection: "column",
    fontSize: 10,
    padding: -10,
    backgroundColor: "rgb(230,60,60)"
  },
});
