import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DrawerRoute from './src/Routes/DrawerRoute';

import TasKProvider from './src/Context/task';

import Toast from 'react-native-toast-message';

export default function App() {

  return (
    <>
      <StatusBar backgroundColor='#DCDCDC' barStyle='dark-content' />
      <TasKProvider>
        <NavigationContainer>
          <DrawerRoute />
        </NavigationContainer>
      </TasKProvider>
    </>
  );
}
