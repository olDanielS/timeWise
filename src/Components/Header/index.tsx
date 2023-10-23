import { Container, Logo, BtnMenu, Modes } from "./styles";
import Feather from '@expo/vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

export default function Header() {
    const navigation = useNavigation();

    return (
        <Container>
            <BtnMenu onPress={() => navigation.openDrawer()}>
                <Feather name="menu" size={32} />
            </BtnMenu>
            <Logo source={require('../../assets/TimeWise.png')} />
            <Modes>
                <BtnMenu>
                    
                </BtnMenu>
            </Modes>
        </Container>
    )
}