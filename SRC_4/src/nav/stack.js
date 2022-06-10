import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Inicio from '../../src/paginas/Inicio' 
import Entrar from '../../src/paginas/Entrar'
import Cadastrar from '../../src/paginas/Cadastrar'

import Home from '../paginas/Home'

const Stack = createNativeStackNavigator();

export default function App(){
    <Stack.Navigator>
        <Stack.Screen name="Inicio" component={Inicio}/>
        <Stack.Screen name="Entrar" component={Entrar}/>
        <Stack.Screen name="Cadastrar" component={Cadastrar}/>
        <Stack.Screen name="Home" component={Home}/>
    </Stack.Navigator>
}