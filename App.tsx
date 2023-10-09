import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DrawerRoute from './src/Routes/DrawerRoute';


export default function App() {
  return (
    <>
      <StatusBar backgroundColor='#DCDCDC' barStyle='dark-content'/>
        <NavigationContainer>
          <DrawerRoute/>
        </NavigationContainer>
      
    </>
  );
}
