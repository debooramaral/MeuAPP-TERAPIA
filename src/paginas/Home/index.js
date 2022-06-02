import React from 'react';
import { View, StatusBar } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './TabNavigator/home'
import Mapa from './TabNavigator/mapa'
import Leitura from './TabNavigator/leitura';
import CallOn from './TabNavigator/callon';

function PaginaInicial(){
    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <StatusBar backgroundColor="white" barStyle="dark-content"/>
            <Home/> 
        </View>
    );
}

function Agenda(){
    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <StatusBar backgroundColor="white" barStyle="dark-content"/>
            <Mapa/>
        </View>
    );
}

function Artigos(){
    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <StatusBar backgroundColor="white" barStyle="dark-content"/>
            <Leitura/>
        </View>
    );
}

function VideoChamada(){
    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <StatusBar backgroundColor="white" barStyle="dark-content"/>
            <CallOn/>
        </View>
    );
}

const Tab = createBottomTabNavigator();

export default function App(){
    return(
        <Tab.Navigator>
            <Tab.Screen name='PaginaInicial' component={PaginaInicial}/>
            <Tab.Screen name='Agenda' component={Agenda}/>
            <Tab.Screen name='Artigos' component={Artigos}/>
            <Tab.Screen name='VideoChamada' component={VideoChamada}/>
        </Tab.Navigator>
    )
}