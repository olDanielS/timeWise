import { Container, Logo, BtnMenu, Modes,Point } from "./styles";
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import {StyleSheet} from 'react-native';

export default function Header(props) {
    const navigation = useNavigation();

    return (
        <Container>
            <BtnMenu onPress={() => navigation.openDrawer()}>
                <Feather name="menu" size={32} />
            </BtnMenu>
            <Logo source={require('../../assets/TimeWise.png')} />
            <Modes style={styleModal.shadow}>
                <BtnMenu>
                    <FontAwesome name="trophy" size={20} color={"#FFBF00"} />
                    <Point>{props.pontuation} pts</Point>
                </BtnMenu>
            </Modes>
        </Container>
    )
}

const styleModal = StyleSheet.create({
    ModalArea: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.60,
        shadowRadius: 4.65,

        elevation: 10,
    }
})