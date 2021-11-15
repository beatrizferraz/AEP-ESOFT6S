import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { BottomNavigation } from 'react-native-paper';
import Imagem from './Imagem';
import Perfil from './Perfil';
import Historico from './Historico';

export default function App() {
   
  const [index, setIndex] = React.useState(1);
  const [routes] = React.useState([
    { key: 'historico', title: 'Histórico', icon: 'clipboard' },
    { key: 'imagem', title: 'Imagem', icon: 'image' },
    { key: 'perfil', title: 'Perfil', icon: 'account' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    historico: Historico,
    imagem: Imagem,
    perfil: Perfil,
  });

  return (
    <View style={styles.container}>
      
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        barStyle={{ backgroundColor: '#990202' }}
      />  
         
    </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
    height: '100%',
  },
});
