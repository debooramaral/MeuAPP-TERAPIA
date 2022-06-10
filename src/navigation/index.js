import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'

import Começo from '../pages/Começo'
import Agenda from '../pages/Agenda'
import Artigos from '../pages/Artigos'
import Chamada from '../pages/Chamada'

const Tab = createBottomTabNavigator();

export default function Nav(){
    return(
        <Tab.Navigator
            screenOptions={{
                hearderShown: false,
                tabBarStyle:{
                    height: 60,
                    position: 'absolute',
                    bottom: 12,
                    right: 12,
                    left: 12,
                    borderRadius: 16,
                    paddingBottom: 6
                },
                tabBarActiveTintColor: '#262626',
            }}
        >
            <Tab.Screen 
                name='Inicio' 
                component={Começo} 
                options={{ 
                    headerShown: false,
                    tabBarIcon: ({size, color}) => (
                        <Ionicons name='home' size={25} color={color}/>
                    )
                }}
            />
            <Tab.Screen 
                name='Agenda' 
                component={Agenda} 
                options={{ 
                    headerShown: false,
                    tabBarIcon: ({size, color}) => (
                        <Ionicons name='calendar' size={25} color={color}/>
                    )
                }}
            />
            <Tab.Screen 
                name='Artigos' 
                component={Artigos} 
                options={{ 
                    headerShown: false,
                    tabBarIcon: ({size, color}) => (
                        <Ionicons name='book' size={25} color={color}/>
                    )
                }}
            />
            <Tab.Screen 
                name='Chamada' 
                component={Chamada} 
                options={{ 
                    headerShown: false,
                    tabBarIcon: ({size, color}) => (
                        <Ionicons name='videocam' size={25} color={color}/>
                    )
                }}
            />
        </Tab.Navigator>
    );
}


