import { StatusBar } from "expo-status-bar";

import React, { useState, useEffect, Component } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  NativeAppEventEmitter,
  KeyboardAvoidingView,
  Alert,
  navigation
} from "react-native";
import firebase from "../../firebaseConfig";

import { NavigationContainer, useNavigation } from "@react-navigation/native";

import { FazLogin } from "./FazLogin";

export default function App({navigation}) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  

  function loginFirebase() {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, senha)
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        // alert(errorCode, errorMessage);
        Alert.alert("Erro no login", "Problemas ao realizar o login");
      });
  }

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        navigation.navigate("Logado");
        console.log("Logado" + user.uid);
        console.log("Outra coisa");
      } else {
        console.log("Não logado!");
      }
    });
  });

  /* function logOutFirebase(){
    firebase.auth().signOut().then(function(){
      alert('Deslogado com sucesso')
    }).catch(function(error){
      alert('Falha')
    });
  } */

  /* function createUserFirebase(){


    firebase.auth().createUserWithEmailAndPassword(email, senha).catch(function(error){
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorCode, errorMessage);
    });
  } */

  const cadastro = () => {
    if (cadastro != null) {
      Alert.alert("Preencha os campos");
    }
  };


  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <StatusBar hidden />
      {/* <View>
        <Image style={{ width: 100, height: 100, borderRadius:  50, margin: 14}}  source={{uri: 'https://th.bing.com/th/id/OIP.HAlzz7_SUXjXKwsKkyBmJQHaHa?w=197&h=197&c=7&r=0&o=5&pid=1.7'}} />
        
      
      </View> */}

      <StatusBar hidden />

      <Text
        style={{
          textAlign: "center",
          fontSize: 45,
          color: "white",
          marginTop: -150,
        }}
      >
        Maestro
      </Text>
      <Text
        style={{
          textAlign: "center",
          fontSize: 18,
          color: "white",
          paddingBottom: 80,
        }}
      >
        A gestão inteligente para sua empresa
      </Text>

      <TextInput
        style={styles.textInput}
        onChangeText={(email) => setEmail(email)}
        value={email}
        placeholder="E-mail"
      />

      <TextInput
        style={styles.textInput}
        onChangeText={(senha) => setSenha(senha)}
        value={senha}
        placeholder="Senha"
      />

      <TouchableOpacity onPress={() => loginFirebase()}>
        <Text style={styles.botaoLogin}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('FazLogin');
        }}
      >
        <Text style={{ fontSize: 12, color: "white" }}>
          Não tem login? Tente
          <Text style={styles.botaoCadastrar}> criar um novo usuário</Text>
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(22,22,22)",
    alignItems: "center",
    justifyContent: "center",
    padding: 25,
    color: "white",
  },

  textInput: {
    width: "95%",
    height: 40,
    color: "white",
    borderRadius: 0,
    paddingLeft: 10,
    marginBottom: 5,
    backgroundColor: "rgb(60, 60, 60)",
    borderRadius: 4,
  },
  botaoLogin: {
    borderRadius: 2,
    margin: 10,
    backgroundColor: "#00ffff",
    paddingLeft: 10,
    paddingRight: 10,
    height: 40,
    width: 235,
    textAlign: "center",
    fontSize: 30,

    fontWeight: "500",
    color: "black",
    borderRadius: 7,
  },
  botaoCadastrar: {
    textDecorationColor: "white",
    borderRadius: 2,
    margin: 1,
    backgroundColor: "transparent",
    paddingLeft: 10,
    paddingRight: 10,
    height: 40,
    width: 235,
    textAlign: "right",
    fontSize: 12,
    color: "#ff914d",
    fontWeight: "500",
    borderRadius: 7,
  },
});
