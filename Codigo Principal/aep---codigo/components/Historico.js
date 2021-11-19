import React from 'react';
import { View, ScrollView, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';


const Historico = () => {

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <View>
          <Image style={styles.img} source={require('../assets/images/oidio.jpeg')}/>
        </View>
        
        <View style={styles.containerTxt}>
          <Text style={styles.txt2}>Data: 10/07/2021</Text>
          <Text style={styles.txt}>Problema identificado: </Text>
          <Text style={styles.txt2}>oídio</Text> 
          <Text style={styles.txt}>Tratamento: </Text>
          <Text style={styles.txt2}>fungicida/adquirir mudas mais <br/>resistentes</Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={''}>
          Ver mais
        </TouchableOpacity>
 
      </View>

      <View style={styles.card}>
        <View>
          <Image style={styles.img} source={require('../assets/images/oidio_folha.jpg')}/>
        </View>
        
        <View style={styles.containerTxt}>
          <Text style={styles.txt2}>Data: 08/07/2021</Text>
          <Text style={styles.txt}>Problema identificado: </Text>
          <Text style={styles.txt2}>oídio</Text>
          <Text style={styles.txt}>Tratamento: </Text>
          <Text style={styles.txt2}>fungicida/adquirir mudas mais <br/>resistentes</Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={''}>
          Ver mais
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <View>
          <Image style={styles.img} source={require('../assets/images/mofo_cinzento_cut.jpeg')}/>
        </View>
        
        <View style={styles.containerTxt}>
          <Text style={styles.txt2}>Data: 13/05/2021</Text>
          <Text style={styles.txt}>Problema identificado: </Text>
          <Text style={styles.txt2}>mofo cinzento</Text>
          <Text style={styles.txt}>Tratamento: </Text>
          <Text style={styles.txt2}>fungicida/limpeza e destruição..</Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={''}>
          Ver mais
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <View>
          <Image style={styles.img} source={require('../assets/images/mancha_angular.jpg')}/>
        </View>
        
        <View style={styles.containerTxt}>
          <Text style={styles.txt2}>Data: 02/02/2021</Text>
          <Text style={styles.txt}>Problema identificado: </Text>
          <Text style={styles.txt2}>mancha angular</Text>
          <Text style={styles.txt}>Tratamento: </Text>
          <Text style={styles.txt2}>adquirir mudas saudáveis para <br/>plantio</Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={''}>
          Ver mais
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
};

export default Historico;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: 'whitesmoke',
    paddingHorizontal: 15,
    paddingTop: 5,
  },

  card: {
    display: 'flex',
    backgroundColor: 'white',
    borderRadius: 10,
    outline: '1px solid green',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 5,
    marginTop: 5,
    marginRight: 8,
    flexDirection: 'row',
    height: 120,
    width: 290,
  },

  button: {
    height: 30,
    width: 90,
    top: 90,
    right: 55,
    fontWeight: 'bold',
    fontFamily: 'verdana',
    fontSize: 12,
    color: '#3471eb',
  },

  img: {
    height: '90px',
    width: '90px',
    borderRadius: 3,
    marginVertical: 5,
  },

  containerTxt: {
    marginLeft: 5,
  },

  txt: {
    fontWeight: 'bold',
    fontSize: 13,
    fontStyle: 'sans-serif',
  },

  txt2: {
    fontSize: 12,
    fontStyle: 'sans-serif',
  },
});
