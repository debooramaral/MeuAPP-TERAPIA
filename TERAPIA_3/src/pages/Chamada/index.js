import React from 'react';
import { View, Text, StatusBar } from 'react-native';

export default function Chamada() {
 return (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F2DB7D'}}>
    <StatusBar backgroundColor='#262626' barStyle='light-content'/>

  </View>
  );
}