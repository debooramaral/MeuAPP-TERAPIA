import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Abre from '../pagina/Abre'
import Login from '../pagina/Login'
import Cadastro from '../pagina/Cadastro'

import Inicio from '../pagina/Inicio'
import Procurar from '../pagina/Procurar'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tab(){
    return(
        <Tab.Navigator>
            <Tab.Screen
                name='Inicio'
                component={Inicio}
            />
            <Tab.Screen
                name='Procurar'
                component={Procurar}
            />
        </Tab.Navigator>
    )
}

export default function Rotas(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='Abre'
                component={Abre}
            />

            <Stack.Screen
                name='Login'
                component={Login}
            />

            <Stack.Screen
                name='Cadastro'
                component={Cadastro}
            />

            <Stack.Screen
                name='Inicio'
                component={Tab}
            />
        </Stack.Navigator>
    )
}