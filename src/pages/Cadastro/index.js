import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import * as Animatable from 'react-native-animatable'
import {useNavigation} from '@react-navigation/native'

export default function Cadastro() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#93BF34" barStyle="dark-content"/>
            <Animatable.View animation="fadeInUp" delay={100} styles={styles.containerHeader}>
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

                <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate('Login')}
                >
                <Text style={styles.buttonText}>SALVAR</Text>
                </TouchableOpacity>      

            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#93BF34',
    },
    containerHeader:{
        marginTop: '15%',
        marginBottom: '8%'
    },
    message:{
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: '10%'
    },
    containerForm:{
        backgroundColor: '#CCFF99',
        height: '85%',
        width: '95%',
        margin: '2.5%',
        marginTop: '3%',
        paddingLeft: '8%',
        paddingTop: '1%',
        borderRadius: 25,
        alignItems: 'stretch'
    },
    title:{
        fontSize: 20,
        marginTop: 25
    },
    input:{
        borderBottomWidth: 1,
        height: 30,
        width: 300,
        marginBottom: 12,
        fontSize: 16
    },
    button:{
        backgroundColor: '#93BF34',
        width: '70%',
        borderRadius: 10,
        paddingVertical: 10,
        marginLeft: 35,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText:{
        fontSize: 25,
        fontWeight: 'bold'
    }
})