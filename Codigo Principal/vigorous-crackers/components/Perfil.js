import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, Linking } from 'react-native';
import { Button } from 'react-native-paper';
import axios from 'axios';
import Cadastro from './Cadastro';

const Perfil = () => {

  const getDados = () => {
    axios.get('https://crudcrud.com/api/8dee70a410bc437e9fdd6bca50ab0938/user/618df47297069d03e848fe7e')
    .then((response) => {
      console.log(response);
      const dados = response.data._id;
      const apiNome = [];
      dados.map((crud) => {
          apiNome.push(crud.apiNome); 
      });  
    }).catch((error) => {
      console.log(error);
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>PERFIL</Text>
   
      <View style={styles.card}>
      <Image style={styles.imgMorango} source={require('../assets/icons/moranguinho.png')} />
        <Text style={styles.txtDados}>Dados pessoais: </Text> 
         <Text>Nome: {JSON.stringify(getDados)} </Text>  
         <Text>E-mail: </Text> 
          <Button 
            style={styles.editButton}
            onPress={''}>
            <Image style={styles.imgEdit} source={require('../assets/icons/editar.png')} />
        </Button>
      </View> 
     

      <View style={styles.card}>
        <Image style={styles.imgMorango} source={require('../assets/icons/moranguinho.png')} />
        <Text style={styles.txtDados}>Senha: </Text>   
        <Text>Senha: </Text> 
        <Button 
          style={styles.editButton}
          onPress={''}>
          <Image style={styles.imgEdit} source={require('../assets/icons/editar.png')} />
        </Button>
      </View> 

      <Text style={styles.txtDeletar}
        onPress={() => Linking.openURL('')}>
        Deletar minha conta
      </Text>
    </View>
  );
};

export default Perfil;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
    paddingHorizontal: 15,
  },

  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    outline: '2px solid green',
    paddingHorizontal: 15,
    paddingVertical: 25,
    marginTop: 15,
    marginBottom: 10,
  },

  titulo: {
    fontWeight: 'bold',
    fontSize: 16,
    alignSelf: 'center',
    marginTop: 8,
  },

  imgMorango: {
    height: 30,
    width: 30,
    display:'flex',
    top: '-35px',
    right: '-265px',
  },

  imgEdit: {
    height: 25,
    width: 25,
    display:'flex',
  },

  editButton: {
    height: 30,
    width: 30,
    bottom: '-15px',
    right: '-238px',
  },

  txtDados: {
    fontWeight: 'bold',
    marginTop: '-45px',
    marginBottom: 10,
  },

  txtDeletar: {
    color: 'grey',
    textDecoration: 'underline',
    display:'flex',
    alignSelf: 'end',
    marginTop: 35,
  },
});