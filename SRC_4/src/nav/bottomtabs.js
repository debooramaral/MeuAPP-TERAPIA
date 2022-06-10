import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Home from '../paginas/Home'
import Agenda from '../paginas/Agenda'
import Artigos from '../paginas/Artigos'
import Contato from '../paginas/Contato'

const Tab = createBottomTabNavigator();

export default function App(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="TAB1" component={TAB1}/>
            <Tab.Screen name="TAB2" component={TAB2}/>
            <Tab.Screen name="TAB3" component={TAB3}/>
            <Tab.Screen name="TAB4" component={TAB4}/>
        </Tab.Navigator>
    );
}

function TAB1(){
    return(
        <Home/>
    );
}
function TAB2(){
    return(
        <Agenda/>
    );
}
function TAB3(){
    return(
        <Artigos/>
    );
}
function TAB4(){
    return(
        <Contato/>
    );
}