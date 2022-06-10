import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Abertura from '../../src/pages/Abertura'
import Login from '../../src/pages/Login'
import Cadastro from '../../src/pages/Cadastro'

import Nav from '../navigation'

const Stack = createNativeStackNavigator();

export default function Rotas(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Abertura"
                component={Abertura}
                options={{headerShown: false}}
            />

            <Stack.Screen
                name="Login"
                component={Login}
                options={{headerShown: false}}
            />

            <Stack.Screen
                name="Cadastro"
                component={Cadastro}
                options={{headerShown: false}}
            />

            <Stack.Screen
                name="Começo"
                component={Nav}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
};