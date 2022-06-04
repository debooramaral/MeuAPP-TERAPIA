import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ActivityIndicator, StatusBar } from 'react-native';
import * as Animatable from 'react-native-animatable'
import {useNavigation} from '@react-navigation/native'

export default function Inicio() {

  const navigation = useNavigation();

 return (
   <View style={styles.container}>
    
    <StatusBar backgroundColor="#F2AE30" barStyle="dark-content"/>

    <View style={styles.containerLogo}>
      <Animatable.Image
        animation="flipInY"
        source={require('../../assets/logomenor2-removebg.png')}
        style={{width:'100%'}}
        resizeMode="center"
      />
    </View>

    <Animatable.View delay={1000} animation="fadeInUp" style={styles.containerForm}>
      <ActivityIndicator size="large" color="#080808"/>
      <Text style={styles.title}>Terapia com Profissionais Bem Próximo de Você ☺</Text>
      <TouchableOpacity 
      style={styles.button}
      onPress={ () => navigation.navigate('Entrar')}
      >
        <Text style={styles.buttonText}>COMEÇAR</Text>
      </TouchableOpacity>
    </Animatable.View>

  </View>

  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#F2AE30'
  },
  containerLogo:{
    flex: 2,
    backgroundColor: '#F2AE30',
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerForm:{
    flex: 1, 
    backgroundColor: '#F2AE30', 
    padding: '15%'
  },
  title:{
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30
  },  
  button:{
    position: 'absolute',
    backgroundColor: '#FFFF99',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%', 
    alignSelf: 'center',
    bottom: '40%',
    alignItems: 'center',
    justifyContent: 'center'
  }, 
  buttonText:{
    fontSize: 18,
    color: '#F2AE30',
    fontWeight: 'bold'
  }
})