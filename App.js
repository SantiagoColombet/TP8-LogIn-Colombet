import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ImageBackground, Image, SafeAreaView, StyleSheet, Text, View, TextInput, Button, Pressable,TouchableOpacity, Alert} from 'react-native';

export default function App() {
  const img = require("./assets/back.png");
  const [valor, setValor] = useState();
  const [contrasena, setContrasena] = useState();

  
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <StatusBar backgroundColor="#8a2be2" />
        <Text style={styles.headerText}>Login App Colombet</Text>
      </View>
      <View style={styles.container}>
        <Image 
        source = {img}
        style = {styles.imagenPerfil}
        />
        <TextInput
          value={valor}
          onChangeText={text => setValor(text)}
          style={styles.textInput}
          placeholder="Ingrese texto..."
          placeholderTextColor="gray"
        />
        <TextInput
          value={contrasena}
          onChangeText={text => setContrasena(text)}
          style={styles.textInput}
          placeholder="contraseña"
          placeholderTextColor="gray"
          secureTextEntry
        />

        <Pressable>
          <Text style={styles.verPerfil}>
            Ver Perfil
          </Text>
        </Pressable>
        <TouchableOpacity style={styles.textContainer}>
          <Text style = {styles.text}>
            ¿Olvidaste la clave?
          </Text>
          <Text style = {styles.lightText}>
            Crear Cuenta
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#8a2be2',
    paddingTop: StatusBar.currentHeight || 50  ,
    paddingBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
    height: '500px'
  },
  headerText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  backgroundImage: {
    height: "100%",
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center',
  },
  safeArea: {
    flex: 1,
    backgroundColor: 'rgb(241, 240, 241)'
  },
  topText: {
    backgroundColor: 'rgb(97, 47, 252)',
    height: '50px',
    width: '100%'

  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "column",
    width: '100%',
    height: 450,
    borderRadius: 50,
    gap: 10
  },
  text: {
    color: 'black',
    fontSize: 16,
  },
  lightText: {
    color: 'black',
    fontSize: 14,
  },
  imagenPerfil: {
    width: '90%',
    height: 200,
    margin: '30'
  },
  textInput: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    width: '90%',
    height: 40,
    padding: 10,
    textAlignVertical: 'top', 
    backgroundColor: 'white',
    borderColor: 'rgb(161, 119, 251)',
    marginBottom: '8'

  },
  contactarButton: {
    backgroundColor: 'aqua',
    borderWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginBottom: 20, 
  },
  contactarText: {
    color: 'white',
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  verPerfil: {
    
    paddingVertical: 10,
    paddingHorizontal: 145,
    borderRadius: 5, 
    backgroundColor: 'rgb(161, 119, 251)',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
    borderColor: 'rgb(161, 119, 251)', 
    borderWidth: 1, 
  },
  textContainer: {
    display: 'flex',
    alignItems: 'center'
  }
});