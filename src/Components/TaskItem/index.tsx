import { TaskProps } from '../../Interfaces/TasksInterface/TaskInterface';
import { Container, Title, BoxPoint, Point } from './styles';
import { StyleSheet } from 'react-native'

export default function TaskItem({ id, task }: any) {
    return (
        <Container style={styles.shadow} onLongPress={() => alert('OK') }>
            <Title>{task}</Title>
            <BoxPoint>
                <Point side='Up'>+5</Point>
                <Point>pts</Point>
            </BoxPoint>
        </Container>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#5b5858",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 3.65,
        
        elevation: 4,
    }
});