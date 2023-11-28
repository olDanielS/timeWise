import { TaskProps } from '../../Interfaces/TasksInterface/TaskInterface';
import { Container, Title, BoxPoint, Point } from './styles';
import { StyleSheet } from 'react-native'

export default function FilterTask({data}: any ) {
    return (
        <Container style={stylesShadow.shadow}>
            <Title  status={data.status} >{data.description}</Title>
            <BoxPoint>
                <Point side='Up'>+{data.pontuation}</Point>
                <Point>pts</Point>
            </BoxPoint>
        </Container>
    )
}

export const stylesShadow = StyleSheet.create({
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