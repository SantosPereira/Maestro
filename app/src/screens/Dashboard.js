import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  TextBase,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import firebase from "../../firebaseConfig";
import { Button, Icon, ListItem } from "react-native-elements";
import Usuarios from "../Usuarios";

export default function Dashboard({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={{color: "black", fontSize: 46, fontWeight: "800", marginBottom: 80, marginTop: -200}}>Dashboard</Text>
      <TouchableOpacity style={styles.layout} onPress={()=>{navigation.navigate('Usuários cadastrados')}}>
        <Text style={styles.textoCabecalho}>Usuário</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.layout} onPress={()=>{navigation.navigate('Produtos cadastrados')}}>
        <Text style={styles.textoCabecalho}>Produto</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.layout} onPress={()=>{navigation.navigate('Estoques cadastrados')}}>
        <Text style={styles.textoCabecalho}>Estoque</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.layout} onPress={()=>{navigation.navigate('Dispositivos cadastrados')}}>
        <Text style={styles.textoCabecalho}>Dispositivo</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <Text style={{color: 'white', alignContent: 'center', justifyContent: 'center', fontSize: 16, marginTop: 25, textAlign: 'center'}}>
        Acesse a visualização dos dados por área dentro do seu comércio 
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "rgb(22,22,22)",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    padding: 25,
    color: "white",
  },
  textoItem: {
    fontSize: 15,
    color: "#34495e",
    padding: 25,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  textoCabecalho: {
    backgroundColor: "rgb(220,120,60)",
    color: "white",
    padding: 5,
    borderRadius: 10,
    fontSize: 30,
    marginBottom: 10,
  },
  layout: {
    width: "90%",
    textAlign: 'center',
    marginBottom: 5
  },
  footer: {
    color: 'white',
    backgroundColor: "rgb(22,22,22)",
    width: "120%",
    marginTop: 100,
    marginBottom: -300,
    height: 300,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
    justifyContent: 'flex-start',
  }
});
