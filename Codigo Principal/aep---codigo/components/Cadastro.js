import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text, Image } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import axios from 'axios';
import Navbar from './Navbar';
import Imagem from './Imagem';
import Perfil from './Perfil'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Cadastro = ({navigation}) => {

  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  
  const [isNotVisibleForUser, setIsNotVisibleForUser] = useState(true);

  const saveNome = value => setNome(value);

  const saveSobrenome = value => setSobrenome(value);

  const saveEmail = value => setEmail(value);

  const saveSenha = value => setSenha(value);

  const handleVisible = () => setIsNotVisibleForUser(!isNotVisibleForUser);

  const register = () => {
    // Salvar nova informação
    axios.post('https://crudcrud.com/api/74301ba95c3f439e99b4c97f4c06a624/user/', {
      apiNome: nome,
      apiSobrenome: sobrenome,
      apiEmail: email,
      apiSenha: senha,
    }).then((response) => { 
       console.log(response.data._id);
       navigation.navigate('Navbar');
    }).catch((error) => {
        //teste para entrar na navbar
        // console.log(error)
       navigation.navigate('Navbar');
    })   
  };

  return (
    <ScrollView style={styles.container}>   
      <Image style={styles.img} source={require('../assets/icons/moranguinho.png')} />      
      <View style={styles.card}>
        <TextInput
          label="Nome"
          style={styles.input}
          value={nome}
          underlineColor="green"
          theme={{ colors: { primary: 'green'}}}
          onChangeText={saveNome}
        />
        <TextInput
          label="Sobrenome"
          style={styles.input}
          value={sobrenome}
          underlineColor="green"
          theme={{ colors: { primary: 'green'}}}
          onChangeText={saveSobrenome}
        />
        <TextInput 
          label="Email"
          style={styles.input}
          value={email}
          underlineColor="green"
          theme={{ colors: { primary: 'green'}}}
          onChangeText={saveEmail}
        />
        <TextInput 
          label="Senha"
          style={styles.input}
          value={senha}
          underlineColor="green"
          onChangeText={saveSenha}
          theme={{ colors: { primary: 'green'}}}
          secureTextEntry={isNotVisibleForUser}
          right={
            <TextInput.Icon 
                onPress={handleVisible} 
                name="eye" /        
            >}
        />
        <Button
          style={styles.button}
          mode="contained"
          onPress={register}>
          Cadastrar
        </Button>
      </View>
    </ScrollView>
  );
};

export default Cadastro;

const styles = StyleSheet.create({ 
  container: {
    background: 'whitesmoke', 
    display: 'flex',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },

  button: {
    borderRadius: 20,
    backgroundColor: 'green',
    marginTop: 10,
  },

  card: {
    backgroundColor: '#FDFFFF',
    paddingHorizontal: 15,
    paddingVertical: 25,
    borderRadius: 10,
  },

  input: {
    backgroundColor: "#FDFFFF",
    marginTop: 10,
  },

  img: {
    height: 50,
    width: 50,
    marginBottom: 10,
    alignSelf: 'center',
  },
});
