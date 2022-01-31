import React, { useState, useEffect, Component } from "react";
import {
  View,
  StyleSheet,
} from "react-native";
import DataTable from 'react-data-table-component';
import axios from "axios";

export default function ProdutoDashboard({navigation}) {
  var [dados, setDados] = useState([]);
  var header = new Headers();
  header.append("Access-Control-Allow-Origin","*")

  useEffect(() => {
    axios.get("http://localhost:8080/produto/listar", header)
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
      name: "Categoria",
      selector: "categoria",
      sortable: true
    },
    {
      name: "Quantidade",
      selector: "quantidade",
      sortable: true,
      right: true
    },
    {
      name: "Estoque",
      selector: "estoque",
      sortable: true,
      right: true
    }
  ];

  return (
    <View style={styles.container}>
      <DataTable
        title="Produtos"
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
