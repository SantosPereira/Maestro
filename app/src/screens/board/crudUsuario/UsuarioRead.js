import React, { useState, useEffect, Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button, DataTable } from "react-native-paper";
import axios from "axios";

export default function UsuarioRead({ navigation }) {
  var [dados, setDados] = useState([]);
  var header = new Headers();
  header.append("Access-Control-Allow-Origin", "*");

  useEffect(() => {
    axios
      .get("http://localhost:8080/usuario/listar", header)
      .then((resposta) => {
        setDados(resposta.data);
        // console.log(dados);
      })
      .catch((resposta) => {
        alert("Não foi possível acessar o servidor")
      });
    });
    
    function apagarUsuario(id) {
      axios
      .get("http://localhost:8080/usuario/remover/" + id, header)
      .then((resposta) => {
        console.log(dados);
      })
      .catch((resposta) => {
        alert("Não foi possível acessar o servidor")
      });
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.titulo}>Usuários</Text> */}
      <Button style={{marginTop: 30}} onPress={() => {navigation.navigate('Criar usuário')}}>Adicionar usuário</Button>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Nome</DataTable.Title>
          <DataTable.Title>E-mail</DataTable.Title>
          <DataTable.Title>Filial</DataTable.Title>
          {/* <DataTable.Title>Setor</DataTable.Title> */}
          <DataTable.Title>Função</DataTable.Title>
          <DataTable.Title>Ações</DataTable.Title>
        </DataTable.Header>
        {dados.map((dado) => {
          return (
            <DataTable.Row key={dado.id}>
              <DataTable.Cell>{dado.nome}</DataTable.Cell>
              <DataTable.Cell>{dado.email}</DataTable.Cell>
              <DataTable.Cell>{dado.filial}</DataTable.Cell>
              {/* <DataTable.Cell>{dado.setor}</DataTable.Cell> */}
              <DataTable.Cell>{dado.funcao}</DataTable.Cell>
              <DataTable.Cell>
                <Button
                color="white"
                style={styles.botaoUpdate}
                onPress={() => {navigation.navigate('Modificar usuário', dado.id)}}
                >Modificar</Button>
                <Button
                color="white"
                style={styles.botaoDelete}
                onPress={() => {apagarUsuario(dado.id)}}
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
    color: "white",
    backgroundColor: "rgb(100,230,100)"
  },
  botaoDelete: {
    display: "flex",
    flexDirection: "column",
    fontSize: 10,
    padding: -10,
    color: "white",
    backgroundColor: "rgb(230,60,60)"
  },
});
