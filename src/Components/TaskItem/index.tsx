import { Container,Title,BoxPoint,Point} from './styles';
import { StyleSheet } from 'react-native'

export default function TaskItem({ data }) {
    return (
        <Container style={styles.shadow}>
            <Title>{data.task}</Title>
            <BoxPoint>
                <Point side='Up'>+5</Point>
                <Point>pts</Point>
            </BoxPoint>
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
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    }
});