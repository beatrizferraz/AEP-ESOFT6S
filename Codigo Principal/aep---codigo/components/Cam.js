import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Modal, Image } from 'react-native';
import { Camera } from 'expo-camera';
import Home from './Imagem';

import { FontAwesome } from '@expo/vector-icons';

export default function Cam() {
 const[type, setType] = useState(Camera.Constants.Type.back);
  const[hasPermission, setHasPermission] = useState(null);
  const [fotoCapturada, setFotoCapturada] = useState(null);
  const [open, setOpen] = useState(false);

  const camRef = useRef(null);

  // permisao para usar a camera
  useEffect(() => {
    (async () =>{
      const{ status } = await Camera.requestCameraPermissionsAsync()
      setHasPermission(status === "granted");
    }) ();
  }, []);

  //Verifica se o usuario deu permissao para acessar a camera
  if(hasPermission === null) {
    return <View/>
  }
  if(hasPermission === false) {
    return <Text>Acesso negado</Text>
  }

  // funcao para tirar a foto
   async function takePicture() {
    if (camRef) {
      const data = await camRef.current.takePictureAsync();
      setFotoCapturada(data.uri);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Camera
        type={type}
        style={styles.camera}
        ref={camRef}
      >
        <View style={styles.contentButton}>
          <TouchableOpacity 
            style={styles.buttonFlip}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
              )
            }}
          >
            <FontAwesome name="exchange" size={40} color="white" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botaoCamera}
            onPress={takePicture}
          >
              <FontAwesome name="camera" size={40} color="white"/>
          </TouchableOpacity>
        </View>
      </Camera>
      
      {fotoCapturada && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={open}
        >

          <View style={styles.contentModal}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => { setOpen(false) }}
          >
            <FontAwesome name="close" size={50} color="fff" />
          </TouchableOpacity>

          <Image style={styles.img} source= {{ uri: fotoCapturada }} />
          </View>
        </Modal>
      )}

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center'
  },
  camera: {
    flex: 1,
  },
  contentButton: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row'
  },
  buttonFlip: {
    position: 'absolute',
    bottom: 50,
    left: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3AFF47',
    margin: 20,
    height: 70,
    width: 70,
    borderRadius: 50
  },
  botaoCamera: {
    position: 'absolute',
    bottom: 50,
    right: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF3632',
    margin: 20,
    height: 70,
    width: 70,
    borderRadius: 50
  },
  contentModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    margin: 20, 
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    left: 2,
    margin: 10,
  },
  img:{
    width: "100%",
    height: 400,
  }
});