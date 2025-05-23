import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ImageBackground, Image, SafeAreaView, StyleSheet, Text, View, TextInput, Button, Pressable,TouchableOpacity, Alert} from 'react-native';

export default function App() {
  const img = require("./assets/icon.png")
  const perfil = require("./assets/icon.png")

  const [valor, setValor] = useState();
  const [contrasena, setContrasena] = useState();

  const [clase, setClase] = useState("verPerfil");
  const cambiarClase = () => {
    if(clase == "verPerfil"){
      setClase("verPerfilNegro")
    }else if(clase == "verPerfilNegro"){
    setClase("verPerfil")
    }
  }
  
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <StatusBar barStyle="light-content" backgroundColor="#8a2be2" />
        <Text style={styles.headerText}>Login App (Apellido, Apellido)</Text>
      </View>
      <View style={styles.container}>
        <Image 
        source = {perfil}
        style = {styles.imagenPerfil}
        />
        <Text style = {styles.text}>
          Santiago Colombet
        </Text>
        <Text style = {styles.lightText}>
          Backend Developer
        </Text>
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

        <Pressable onPress={cambiarClase}>
          <Text style={clase === "verPerfilNegro" ? styles.verPerfilNegro : styles.verPerfil}>
            Ver Perfil
          </Text>
        </Pressable>
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
    fontSize: 18,
  },
  lightText: {
    color: 'gray',
    fontSize: 14,
  },
  imagenPerfil: {
    borderRadius: 50, 
    width: 100,
    height: 100
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
    borderColor: 'rgb(161, 119, 251)'
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
    borderColor: 'gray',
    borderWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  verPerfilNegro: {
    backgroundColor: 'black',
    borderWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  }
});