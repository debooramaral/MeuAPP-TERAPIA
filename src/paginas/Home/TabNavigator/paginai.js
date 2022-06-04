import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default function PaginaInicial(){
    return(
      <View style={styles.container}>
        <Text style={styles.title}>Olá, Nome Sobrenome</Text>

        <View style={styles.container1}>
          <Text>
            imagem do cerebro e coração
          </Text>
        </View>

        <View style={styles.container2}>
          <Text>PROCURE UM PROFISSIONAL</Text>
        </View>

        <View style={styles.container3}>
          <Text>O QUE ISSO SIGNIFICA? #artigos</Text>
        </View>

        <View style={styles.container3}>
          <Text>TERAPIA ONLINE</Text>
        </View>
      </View>  
    );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title:{
    fontSize: 22,
    fontWeight: 'bold',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  }
})

