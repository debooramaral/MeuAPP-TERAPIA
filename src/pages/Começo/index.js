import React from 'react';
import { View, Text, StatusBar, StyleSheet, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function Começo() {
 return (
  <View style={{flex: 1, backgroundColor: '#F2C4C4'}}>
    <StatusBar backgroundColor='#262626' barStyle='light-content'/>
    <Text style={styles.title}>Bem Vindo, NOME SOBRENOME </Text>
    <View style={styles.imagem}>
      <Image 
        source={require('../../assets/imagem1.png')}
        style={{width: '80%'}}
        resizeMode='center'
      />
    </View>
    <View style={styles.container1}>
      <Ionicons name='locate' size={30} color='#262626'/>
      <Text style={styles.title}>Procure um Profissional</Text>
      <Text style={styles.descriçao}>Agende o melhor horário</Text>
    </View>
    <View style={styles.container2}>
      <Ionicons name='help' size={25} color='#262626'/>
      <Text style={styles.title}>O que isso significa?</Text>
      <Text style={styles.descriçao}>Agende o melhor horário</Text>
    </View>
    <View style={styles.container3}>
      <Ionicons name='people' size={25} color='#262626'/>
      <Text style={styles.title}>Terapia Online ♥</Text>
      <Text style={styles.descriçao}>Faça video chamada</Text>
      <Image
        source={require('../../assets/terapia-online.jpg')}
        style={{width: '50%'}}
        resizeMode='contain'
      />
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  title:{
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 10,
    marginLeft: 10,
  },
  imagem:{
    backgroundColor: 'green',
    borderRadius: 20,
    margin: 15,
    height: 200,
  },
  container1:{
    backgroundColor: '#63BFB6',
    borderRadius: 20,
    margin: 15,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container2:{
    backgroundColor: '#A8DE99',
    borderRadius: 20,
    margin: 15,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container3:{
    backgroundColor: '#F2DB7D',
    borderRadius: 20,
    margin: 15,
    height: 180,
    alignItems: 'center',
    justifyContent: 'center'
  },
})