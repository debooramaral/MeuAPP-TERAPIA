import React from 'react';
import { View, Text, StatusBar, StyleSheet, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function Começo() {
 return (
  <View style={{backgroundColor: '#F2C4C4', flex: 1, }}>
    <StatusBar backgroundColor='#262626' barStyle='light-content'/>
    <Text style={styles.title}>Bem Vindo, NOME SOBRENOME </Text>
    <View style={styles.imagem}>
      <Image 
        source={require('../../assets/imagem1.png')}
        style={{width: '100%', height: 150, borderRadius: 30}}
        resizeMode='center'
      />
    </View>
    <View style={styles.container1}>
      <Ionicons name='navigate' size={30} color='#262626'/>
      <Text style={styles.title}>Procure um Profissional</Text>
      <Text style={styles.descriçao}>Agende o melhor horário</Text>
    </View>
    <View style={styles.container2}>
      <Ionicons name='book' size={25} color='#262626'/>
      <Text style={styles.title}>O que isso significa?</Text>
      <Text style={styles.descriçao}>Agende o melhor horário</Text>
    </View>
    <View style={styles.container3}>
      <Image
        source={require('../../assets/terapia-online.jpg')}
        style={{width: '30%', height: 70, margin: 5, borderRadius: 15, backgroundColor: '#F2DB7D'}}
        resizeMode='contain'
      />
      <Ionicons name='people' size={25} color='#262626'/>
      <Text style={styles.title}>Terapia Online ♥</Text>
      <Text style={styles.descriçao}>Faça video chamada</Text>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  title:{
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 10,
  },
  imagem:{
    borderRadius: 20,
    height: 145,
    margin: 10,
  },
  container1:{
    backgroundColor: '#63BFB6',
    borderRadius: 20,
    minHeight: 100,
    alignItems: 'center',
    justifyContent: 'center', 
    margin: 10,
  },
  container2:{
    backgroundColor: '#A8DE99',
    borderRadius: 20,
    minHeight: 100,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  container3:{
    backgroundColor: '#F2DB7D',
    borderRadius: 20,
    height: 180,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
})