import React, { useState, useEffect, Component } from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import axios from "axios";

export default function ProdutoCreate({ navigation }) {
  var [dados, setDados] = useState({
    nome: "",
    categoria: "",
    quantidade: "",
    estoque: "",
  });
  var header = new Headers();
  header.append("Access-Control-Allow-Origin", "*");

  function cadastrar() {
    var queryString = new URLSearchParams(dados).toString();
      axios
        .post(
          "http://localhost:8080/produto/cadastrar/" + "?" + queryString,
          header
        )
        .then((resposta) => {
          console.log(resposta.data);
        });
    navigation.navigate('Produtos cadastrados')
  }

  return (
    <View style={styles.container}>
    {/* <Text style={styles.titulo}>Produtos</Text> */}
      
    <Text style={{marginTop: 50}}></Text>
    <Text style={styles.label}>Nome</Text>
    <TextInput
      style={styles.input}
      onChangeText={(texto) => {
        setDados({ ...dados, nome: texto });
        console.log(dados);
      }}
      value={dados.nome}
    />

    <Text style={styles.label}>Categoria</Text>
    <TextInput
      style={styles.input}
      onChangeText={(texto) => {
        setDados({ ...dados, categoria: texto });
        console.log(dados);
      }}
      value={dados.categoria}
    />

    <Text style={styles.label}>Quantidade</Text>
    <TextInput
      style={styles.input}
      onChangeText={(texto) => {
        setDados({ ...dados, quantidade: texto });
        console.log(dados);
      }}
      value={dados.quantidade}
    />

    <Text style={styles.label}>Estoque</Text>
    <TextInput
      style={styles.input}
      onChangeText={(texto) => {
        setDados({ ...dados, estoque: texto });
        console.log(dados);
      }}
      value={dados.estoque}
    />

    <TouchableOpacity style={styles.botao} onPress={() => cadastrar()}>
      <Text>Enviar</Text>
    </TouchableOpacity>
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
  label: {
    justifyContent: "flex-start"
  },
  input: {
    backgroundColor: "rgb(230,230,230)",
    borderRadius: 5,
    marginBottom: 10,
    padding: 5
  },
  botao: {
    backgroundColor: "orange",
    fontSize: 10,
    padding: 10,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 5
  },
});
