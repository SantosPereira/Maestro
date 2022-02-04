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

export default function UsuarioUpdate({ navigation, route }) {
  var [dados, setDados] = useState({
    nome: "",
    email: "",
    nomeUsuario: "",
    filial: "",
    setor: "",
    funcao: "",
  });
  var header = new Headers();
  header.append("Access-Control-Allow-Origin", "*");

  useEffect(() => {
    axios
      .get("http://localhost:8080/usuario/editar/" + route.params, header)
      .then((resposta) => {
        setDados(resposta.data);
        // console.log(dados);
      });
  }, []);

  function atualizar() {
    var queryString = new URLSearchParams(dados).toString();
    axios
      .post(
        "http://localhost:8080/usuario/cadastrar/" + "?" + queryString,
        header
      )
      .then((resposta) => {
        console.log(resposta.data);
      });
    navigation.navigate("UsuarioRead");
  }

  return (
    <View style={styles.container}>
      {/* <Text style={styles.titulo}>Criar usuário</Text> */}
      
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

      <Text style={styles.label}>E-mail</Text>
      <TextInput
        style={styles.input}
        onChangeText={(texto) => {
          setDados({ ...dados, email: texto });
          console.log(dados);
        }}
        value={dados.email}
      />

      <Text style={styles.label}>Nome de usuário</Text>
      <TextInput
        style={styles.input}
        onChangeText={(texto) => {
          setDados({ ...dados, nomeUsuario: texto });
          console.log(dados);
        }}
        value={dados.nomeUsuario}
      />

      <Text style={styles.label}>Filial</Text>
      <TextInput
        style={styles.input}
        onChangeText={(texto) => {
          setDados({ ...dados, filial: texto });
          console.log(dados);
        }}
        value={dados.filial}
      />

      <Text style={styles.label}>Setor</Text>
      <TextInput
        style={styles.input}
        onChangeText={(texto) => {
          setDados({ ...dados, setor: texto });
          console.log(dados);
        }}
        value={dados.setor}
      />

      <Text style={styles.label}>Função</Text>
      <TextInput
        style={styles.input}
        onChangeText={(texto) => {
          setDados({ ...dados, funcao: texto });
          console.log(dados);
        }}
        value={dados.funcao}
      />

      <TouchableOpacity style={styles.botao} onPress={() => atualizar()}>
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
    justifyContent: "flex-start",
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
    borderRadius: 5,
  },
});
