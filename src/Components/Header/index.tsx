import { Container, Logo, BtnMenu, Modes,Point } from "./styles";
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

export default function Header(props) {
    const navigation = useNavigation();

    return (
        <Container>
            <BtnMenu onPress={() => navigation.openDrawer()}>
                <Feather name="menu" size={32} />
            </BtnMenu>
            <Logo source={require('../../assets/TimeWise.png')} />
            <Modes>
                <BtnMenu>
                    <FontAwesome name="trophy" size={20} color={"#FFBF00"} />
                    <Point>{props.pontuation} pts</Point>
                </BtnMenu>
            </Modes>
        </Container>
    )
}