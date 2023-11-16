import { TaskProps } from '../../Interfaces/TasksInterface/TaskInterface';
import { Container, Title, BoxPoint, Point } from './styles';
import { StyleSheet } from 'react-native'

export default function TaskItem({data, openModal,checkTask}: any ) {
    return (
        <Container style={styles.shadow} onLongPress={() => openModal('action', data)} onPress={() => checkTask(data)}>
            <Title  status={data.status} >{data.description}</Title>
            <BoxPoint>
                <Point side='Up'>+{data.pontuation}</Point>
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