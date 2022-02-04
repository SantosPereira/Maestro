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

export default function DispositivoUpdate({ navigation, route }) {
  var [dados, setDados] = useState({
    nome: "",
    imei: "",
    modelo: "",
  });
  var header = new Headers();
  header.append("Access-Control-Allow-Origin", "*");

  useEffect(() => {
    axios
      .get("http://localhost:8080/dispositivo/editar/" + route.params, header)
      .then((resposta) => {
        setDados(resposta.data);
        // console.log(dados);
      });
  }, []);

  function atualizar() {
    var queryString = new URLSearchParams(dados).toString();
    axios
      .post(
        "http://localhost:8080/dispositivo/cadastrar/" + "?" + queryString,
        header
      )
      .then((resposta) => {
        console.log(resposta.data);
      });
    navigation.navigate("Dispositivos cadastrados");
  }

  return (
    <View style={styles.container}>
    {/* <Text style={styles.titulo}>Cadastrar Dispositivo</Text> */}
      
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

    <Text style={styles.label}>IMEI</Text>
    <TextInput
      style={styles.input}
      onChangeText={(texto) => {
          setDados({ ...dados, imei: texto });
          console.log(dados);
        }}
      value={dados.imei}
    />

    <Text style={styles.label}>Modelo</Text>
    <TextInput
      style={styles.input}
      onChangeText={(texto) => {
          setDados({ ...dados, modelo: texto });
          console.log(dados);
        }}
      value={dados.modelo}
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
