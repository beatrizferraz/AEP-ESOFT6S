import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { Card, BottomNavigation } from 'react-native-paper';
import Cadastro from './components/Cadastro';
import Navbar from './components/Navbar';
import Perfil from './components/Perfil';
import Cam from './components/Cam';
import Historico from './components/Historico';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='Cadastro'
            component={Cadastro}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name='Cam'
            component={Cam}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name='Historico'
            component={Historico}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name='Perfil'
            component={Perfil}
            options={{headerShown: false}}
          />
          
          <Stack.Screen
            name='Navbar'
            component={Navbar}
            options={{headerShown: false}}
          />
          
      </Stack.Navigator>
    </NavigationContainer>
  
  );
}

const styles = StyleSheet.create({
  
});