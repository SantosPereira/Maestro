import React, { useState, useEffect, Component } from "react";
import {
  View,
  StyleSheet,
} from "react-native";
import DataTable from 'react-data-table-component';
import axios from "axios";

export default function DispositivoDashboard({navigation}) {
  var [dados, setDados] = useState([]);
  var header = new Headers();
  header.append("Access-Control-Allow-Origin","*")

  useEffect(() => {
    axios.get("http://localhost:8080/dispositivo/listar", header)
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
      name: "IMEI",
      selector: "imei",
      sortable: true
    },
    {
      name: "Modelo",
      selector: "modelo",
      sortable: true,
      right: true
    }
  ];

  return (
    <View style={styles.container}>
      <DataTable
        title="Dispositivos"
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
