import React from 'react';
import { View, StatusBar } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Feather} from '@expo/vector-icons'


import PaginaI from './TabNavigator/paginai'
import Mapa from './TabNavigator/mapa'
import Leitura from './TabNavigator/leitura';
import ChamadaVideo from './TabNavigator/chamadavideo';

const Tab = createBottomTabNavigator();

export default function App(){
    return(
        
        <Tab.Navigator
            barStyle={{backgroundColor: 'red'}}
        >
            <Tab.Screen 
                name='Inicio' 
                component={PaginaInicial} 
                options={{
                    headerShown: false,
                    tabBarIcon: () => {
                        return <Feather name="home" size={25} color="#000"/>
                    }
                }}
            />
            <Tab.Screen 
            name='Agenda' 
            component={Agenda} 
            options={{
                headerShown: false,
                tabBarIcon: () => {
                    return <Feather name="calendar" size={25} color="#000"/>
                }
                }}
            />
            <Tab.Screen 
            name='Artigos' 
            component={Artigos} 
            options={{
                headerShown: false,
                tabBarIcon: () => {
                    return <Feather name="book" size={25} color="#000"/>
                }
                }}
            />
            <Tab.Screen 
            name='Video Chamada' 
            component={VideoChamada} 
            options={{
                headerShown: false,
                tabBarIcon: () => {
                    return <Feather name="video" size={25} color="#000"/>
                }
                }}
            />
        </Tab.Navigator>
            
    );
}

function PaginaInicial(){
    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f2c4c4'}}>
            <StatusBar backgroundColor="white" barStyle="dark-content"/>
            <PaginaI/> 
        </View>
    );
}

function Agenda(){
    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#63fbb6'}}>
            <StatusBar backgroundColor="white" barStyle="dark-content"/>
            <Mapa/>
        </View>
    );
}

function Artigos(){
    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#71d9ce'}}>
            <StatusBar backgroundColor="white" barStyle="dark-content"/>
            <Leitura/>
        </View>
    );
}

function VideoChamada(){
    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#cc8fcc'}}>
            <StatusBar backgroundColor="white" barStyle="dark-content"/>
            <ChamadaVideo/>
        </View>
    );
}
