import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Alert,
  navigation,
} from "react-native";

import firebase from "../../firebaseConfig";

export default function CadastrarUsuario({ navigation }) {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");


  function criarLoginParaUsuario() {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, senha)
      .then(()=>{
        navigation.navigate('Home')
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        Alert.alert(errorCode, errorMessage);
        alert("Erro ao registar usuário", errorMessage);
        // Alert.alert("Erro ao registar usuário", errorMessage);
      });
  }

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView>
        <View style={styles.container}>
          <Text style={{fontSize: 40, color: 'white', marginBottom: 30}}>Criar conta</Text>
          <TextInput
            style={styles.textInput}
            autoCorrect={false}
            placeholder="Usuário"
          />
          <TextInput
            style={styles.textInput}
            autoCorrect={false}
            onChangeText={(email) => setEmail(email)}
            value={email}
            placeholder="E-mail"
          />

          <TextInput
            style={styles.textInput}
            autoCorrect={false}
            onChangeText={(senha) => setSenha(senha)}
            value={senha}
            placeholder="Senha"
          />
          <View style={styles.acao}>
            <TouchableOpacity
              onPress={() => {
                criarLoginParaUsuario();
              }}
            >
              <View>
                <Text style={styles.botaoAcao}>Concluir</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(22,22,22)",
    alignItems: "center",
    justifyContent: "center",
    color: 'white',
  },
  textInput: {
    width: "150%",
    height: 40,
    color: "black",
    borderRadius: 0,
    paddingLeft: 10,
    marginBottom: 10,
    backgroundColor: "white",
    borderRadius: 12,
  },
  botaoAcao: {
    color: 'white',
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    margin: 20,
    borderRadius: 5,
    backgroundColor: 'orange',
  },
});
