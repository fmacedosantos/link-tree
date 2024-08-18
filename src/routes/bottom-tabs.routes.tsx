import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/Home/Home";
import { Skills } from "../screens/Skills/Skills";

import Entypo from '@expo/vector-icons/Entypo';

const {Navigator, Screen} = createBottomTabNavigator()

export function BottomTabRoutes(){
    return(
        <Navigator>
            <Screen name="Home" component={Home}
            options={{
                headerShown: false,
                tabBarIcon: ({color, size}) => (
                    <Entypo name="home" size={24} color="black" />
                )
            }}/>
            <Screen name="Skills" component={Skills}
            options={{
                headerShown: false,
                tabBarIcon: ({color, size}) => (
                    <Entypo name="code" size={24} color="black" />
                )
            }}/>
        </Navigator>
    )
}