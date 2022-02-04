import React, { useState, useEffect, Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { route } from "@react-navigation/native";
import axios from "axios";

export default function EstoqueUpdate({ navigation, route }) {
  var [dados, setDados] = useState({
    nome: "",
    tipo: "",
    quantidade: "",
  });
  var header = new Headers();
  header.append("Access-Control-Allow-Origin", "*");

  useEffect(() => {
    axios
      .get("http://localhost:8080/estoque/editar/" + route.params, header)
      .then((resposta) => {
        setDados(resposta.data);
        // console.log(dados);
      });
  }, []);

  function atualizar() {
    var queryString = new URLSearchParams(dados).toString();
    axios
      .post(
        "http://localhost:8080/estoque/cadastrar/" + "?" + queryString,
        header
      )
      .then((resposta) => {
        console.log(resposta.data);
      });
    navigation.navigate("Estoques cadastrados");
  }

  return (
    <View style={styles.container}>
    {/* <Text style={styles.titulo}>Cadastrar estoque</Text> */}
      
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

    <Text style={styles.label}>Tipo</Text>
    <TextInput
      style={styles.input}
      onChangeText={(texto) => {
          setDados({ ...dados, tipo: texto });
          console.log(dados);
        }}
      value={dados.tipo}
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

    <TouchableOpacity
    style={styles.botao}
    onPress={() => atualizar()}
    ><Text>Enviar</Text></TouchableOpacity>
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
    justifyContent: "flex-start",
  },
  input: {
    backgroundColor: "rgb(230,230,230)",
    borderRadius: 5,
    marginBottom: 10,
    padding: 5,
    width: "60%",
  },
  botao: {
    backgroundColor: "orange",
    fontSize: 10,
    padding: 10,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 5,
  },
});
