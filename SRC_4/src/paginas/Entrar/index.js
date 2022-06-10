import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export default function Entrar() {

  const navigation = useNavigation();

 return (
   <View style={styles.container}>
     <StatusBar backgroundColor="#BF3467" barStyle="dark-content"/>
      <Animatable.View animation="fadeInLeft" delay={100} style={styles.containerHeader}>
        <Text style={styles.message}>Bem-Vindo(a)</Text>
      </Animatable.View>

      <Animatable.View animation={"fadeInUp"} style={styles.containerForm}>
        <Text style={styles.title}>E-MAIL</Text>
        <TextInput
          placeholder='Digite um e-mail'
          style={styles.input}
        />

        <Text style={styles.title}>SENHA</Text>
        <TextInput
          placeholder='Digite a senha'
          style={styles.input}
        />

        <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('')} /* aqui entra a tab navigation */
        >
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={styles.buttonRegister}
        onPress={() => navigation.navigate('Cadastrar')}
        >
          <Text style={styles.registerText}>Não Possui uma Conta? CADASTRE-SE</Text>
        </TouchableOpacity>
      
      </Animatable.View>    
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#BF3467',
  },
  containerHeader:{
    marginTop: '15%',
    marginBottom: '8%',
  },
  message:{
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  containerForm:{
    backgroundColor:'#F2C4C4',
    height: '45%',
    width: '95%',
    margin: '2.5%',
    marginTop: '20%',
    marginBottom: '8%',
    borderRadius: 25,
    alignItems: 'center',
  },
  title:{
    fontSize: 20,
    marginTop: 25,
  },
  input:{
    borderBottomWidth: 1,
    height: 40,
    width: 300,
    marginBottom: 12,
    fontSize: 16,
  },
  button:{
    backgroundColor: '#BF3467',
    width: '50%',
    borderRadius: 10,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText:{
    color: '#F2C4C4',
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonRegister:{
    marginTop: 14,
  },
  registerText:{
    color:'#a1a1a1'
  }
})