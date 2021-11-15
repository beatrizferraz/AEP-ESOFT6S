import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-paper';

const Home = () => {
  return(
    <View style={styles.container}>

      <View style={styles.containerMenor}>
        <Button
          mode='outlined' 
          style={styles.button}
          color='#2e2e2e'
          onPress={''}>
          <Image style={styles.icon} source={require('../assets/icons/camera.png')} /> 
        </Button>

      <Button
        mode='outlined' 
        style={styles.button}
        color='#2e2e2e'
        onPress={''}>
        <Image style={styles.icon} source={require('../assets/icons/imagem.png')} /> 
      </Button>
      </View>
      
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: 'whitesmoke',
    paddingVertical: 180,
  },

  containerMenor: {
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center',
    flexDirection: 'row',
    alignSelf: 'center',
  },

  button: {
    height: 140,
    width: 140,
    margin: 10,
    borderRadius: 20,
    cursor: 'pointer',
    paddingVertical: 20,
  },

  icon: {
   height: 80,
   width: 80,
  },
});