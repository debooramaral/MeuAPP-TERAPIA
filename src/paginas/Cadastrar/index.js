import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar } from 'react-native';

import * as Animatable from 'react-native-animatable'

export default function Cadastrar() {
    return (
        <NavigationContainer>
            <StatusBar backgroundColor="#63BFB6" barStyle="dark-content"/>
                <View style={styles.container}>
                    <Animatable.View animation="fadeInUp" delay={500} styles={styles.containerHeader}>
                        <Text style={styles.message}>CADASTRE</Text>
                    </Animatable.View>

                    <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                        <Text style={styles.title}>Nome</Text>
                        <TextInput
                            placeholder='Seu Nome'
                            style={styles.input}
                        />

                        <Text style={styles.title}>Sobrenome</Text>
                        <TextInput
                            placeholder='Seu Sobrenome'
                            style={styles.input}
                        />

                        <Text style={styles.title}>Estado e Cidade</Text>
                        <TextInput
                            placeholder='Campo Grande - MS'
                            style={styles.input}
                        />

                        <Text style={styles.title}>Telefone</Text>
                        <TextInput
                            placeholder='DDD + 90000-0000'
                            style={styles.input}
                        />

                        <Text style={styles.title}>E-Mail</Text>
                        <TextInput
                            placeholder='nome@email.com'
                            style={styles.input}
                        />

                        <Text style={styles.title}>Senha</Text>
                        <TextInput
                            placeholder='*****'
                            style={styles.input}
                        />

                        <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>SALVAR</Text>
                        </TouchableOpacity>      

                    </Animatable.View>
                </View>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container:{

    }
})