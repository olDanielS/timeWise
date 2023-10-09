import { Container, LeftCard, RigthCard, TextLeftCard,TextRigthCard,CheckPoint} from './styles';
import { StyleSheet } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function CardHeaderTask() {
    return (
        <Container>
            <LeftCard>
                <CheckPoint style={styles.shadow}>
                    <FontAwesome name='check' size={20} color='#FFF'/>
                </CheckPoint>
                <TextLeftCard>Completar desafio “Pokedex React” e realizar envio no Github</TextLeftCard>
            </LeftCard>
            <RigthCard style={styles.shadow}>
            <FontAwesome name='clock-o' size={32} color='#FFF'/>
            <TextRigthCard> 1h 24min</TextRigthCard>
            </RigthCard>
        </Container>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    }
});