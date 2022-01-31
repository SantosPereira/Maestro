import React, { useState, useEffect, Component } from "react";
import {
  View,
  StyleSheet,
} from "react-native";
import DataTable from 'react-data-table-component';
import axios from "axios";

export default function UsuarioDashboard({navigation}) {
  var [dados, setDados] = useState([]);
  var header = new Headers();
  header.append("Access-Control-Allow-Origin","*")

  useEffect(() => {
    axios.get("http://localhost:8080/usuario/listar", header)
      .then((resposta)=>{
        setDados(resposta.data)
        console.log(dados)
      })
  }, []);

  const colunas = [
    {
      name: "Nome",
      selector: "nome",
      sortable: true
    },
    {
      name: "Nome de usuário",
      selector: "nomeUsuario",
      sortable: true
    },
    {
      name: "Email",
      selector: "email",
      sortable: true,
      right: true
    }
  ];

  return (
    <View style={styles.container}>
      <DataTable
        title="Usuários"
        columns={colunas}
        data={dados}
        pagination
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
