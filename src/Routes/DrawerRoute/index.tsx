import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../../Pages/Home";
import PontuationScreen from "../../Pages/Pontuation";

import CustomDrawer from "../../Components/CustomDrawer";

import Feather from '@expo/vector-icons/Feather';

export default function DrawerRoute(){
    const Drawer = createDrawerNavigator();
    return(
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} /> }
            screenOptions={{
                drawerActiveBackgroundColor: '#40BF62',
                drawerActiveTintColor: '#FFF',
                drawerLabelStyle:{fontSize:18}
            }}
        >
            <Drawer.Screen name="Home" component={Home}
                options={{
                    headerShown: false,
                    drawerIcon: ({color}) => (
                        <Feather name="home" size={24} color={color}/>
                    )
                }}
        
            />
            <Drawer.Screen name="Pontuação" component={PontuationScreen}
                options={{
                    headerShown: false,
                    drawerIcon: ({color}) => (
                        <Feather name="info" size={24} color={color}/>
                    )
                }}
            />
        </Drawer.Navigator>
    )
}