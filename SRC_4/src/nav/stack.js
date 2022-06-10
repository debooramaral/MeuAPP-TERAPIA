import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Inicio from '../../src/paginas/Inicio' 
import Entrar from '../../src/paginas/Entrar'
import Cadastrar from '../../src/paginas/Cadastrar'

import Tab from './bottomtabs'

const Stack = createNativeStackNavigator();

export default function Nav(){
    <Stack.Navigator>
        <Stack.Screen name="Inicio" component={Inicio}/>
        <Stack.Screen name="Entrar" component={Entrar}/>
        <Stack.Screen name="Cadastrar" component={Cadastrar}/>
        <Stack.Screen name="Home" component={Tab}/>
    </Stack.Navigator>
}