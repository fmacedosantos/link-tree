import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/Home/Home";
import { Skills } from "../screens/Skills/Skills";

const {Navigator, Screen} = createBottomTabNavigator()

export function BottomTabRoutes(){
    return(
        <Navigator>
            <Screen name="Home" component={Home}
            options={{
                headerShown: false
            }}/>
            <Screen name="Skills" component={Skills}
            options={{
                headerShown: false
            }}/>
        </Navigator>
    )
}