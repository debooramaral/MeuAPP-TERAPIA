import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Inicio from '../paginas/Inicio'
import Entrar from '../paginas/Entrar'
import Cadastrar from '../paginas/Cadastrar'

const Stack = createNativeStackNavigator();

export default function Rotas(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Inicio"
                component={Inicio}
                options={{headerShown: false}}
            />

            <Stack.Screen
                name="Entrar"
                component={Entrar}
                options={{headerShown: false}}
            />

            <Stack.Screen
                name="Cadastrar"
                component={Cadastrar}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}