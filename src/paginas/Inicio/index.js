import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ActivityIndicator } from 'react-native';

export default function Inicio() {
 return (
   <View style={styles.container}>

    <View style={styles.containerLogo}>
      <Image
        source={require('../../assets/logomenor2-removebg.png')}
        style={{width:'100%'}}
        resizeMode="center"
      />
    </View>

    <View style={styles.containerForm}>
      <ActivityIndicator size="large" color="#080808"/>
      <Text style={styles.title}>Terapia com Profissionais Bem Próximo de Você ☺</Text>
      <Text style={styles.text}>Faça Login para Começar</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>ACESSAR</Text>
      </TouchableOpacity>
    </View>

  </View>

  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#BF3467'
  },
  containerLogo:{
    flex: 2,
    backgroundColor: '#BF3467',
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerForm:{
    flex: 1, 
    backgroundColor: '#BF3467', 
    padding: '15%'
  },
  title:{
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30
  },
  text:{
    color: '#F2C4C4', 
    textAlign: 'center',
    padding: '10%'
  },
  button:{
    position: 'absolute',
    backgroundColor: '#f2c4c4',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%', 
    alignSelf: 'center',
    bottom: '15%',
    alignItems: 'center',
    justifyContent: 'center'
  }, 
  buttonText:{
    fontSize: 18,
    color: '#f23064',
    fontWeight: 'bold'
  }
})