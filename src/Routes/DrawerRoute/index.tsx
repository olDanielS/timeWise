import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../../Pages/Home";

export default function DrawerRoute(){
    const Drawer = createDrawerNavigator();
    return(
        <Drawer.Navigator >
            <Drawer.Screen name="Home" component={Home}
                options={{
                    headerShown: false
                }}
            />
        </Drawer.Navigator>
    )
}