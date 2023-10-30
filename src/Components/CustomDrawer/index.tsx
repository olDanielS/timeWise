import {View, Text} from 'react-native';
import {Container,Header, Logo} from './styles';
import {styles} from '../CardHeaderTask/index';

import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';

export default function CustomDrawer(props:any){
    return (
        <Container >
            <Header>
                <Logo source={require('../../assets/TimeWise.png')}/>
            </Header>


            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props}/>
            </DrawerContentScrollView>
        </Container>
    )
}