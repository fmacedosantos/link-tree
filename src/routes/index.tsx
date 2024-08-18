import { NavigationContainer } from "@react-navigation/native";
import { BottomTabRoutes } from "./bottom-tabs.routes";

export function Routes(){
    return(
        <NavigationContainer>
            <BottomTabRoutes/>
        </NavigationContainer>
    )
}