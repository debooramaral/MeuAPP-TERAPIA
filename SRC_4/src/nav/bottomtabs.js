import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Home from '../pags/Home'
import Agenda from '../pags/Agenda'
import Artigos from '../pags/Artigos'
import Contato from '../pags/Contato'

const Tab = createBottomTabNavigator();

export default function Stack(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Agenda" component={Agenda}/>
            <Tab.Screen name="Artigos" component={Artigos}/>
            <Tab.Screen name="Contato" component={Contato}/>
        </Tab.Navigator>
    )
}

