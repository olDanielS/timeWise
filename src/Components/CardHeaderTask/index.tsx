import { Container, LeftCard, RigthCard, TextLeftCard,TextRigthCard,CheckPoint} from './styles';
import { StyleSheet } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect,useContext } from 'react';

import { TaskContext } from "../../Context/task";


export default function CardHeaderTask(props) {

    const { newTask} = useContext(TaskContext);

    const [lasTask, setLastTask] = useState([]);
    const [houtLasTask, setHoutLasTask] = useState();

    useEffect(() => {
        const getTask = async () => {
            let resp = await AsyncStorage.getItem('@lastTask');
            setLastTask(JSON.parse(resp)) 

            let time = new Date(lasTask.updatedAt);
            const hora = time.toLocaleTimeString('en-US', { hour12: false, hour: 'numeric', minute: 'numeric', second: 'numeric' });
            console.log(hora)    
            setHoutLasTask(hora);
            
        }
        getTask();
    },[newTask])
    return (
        <Container style={styles.shadow}>
            <LeftCard>
                <CheckPoint style={styles.shadow}>
                    <FontAwesome name='check' size={20} color='#FFF'/>
                </CheckPoint>
            <TextLeftCard>{lasTask ? lasTask.description: "Conclua uma tarefa para ela aparecer aqui"}</TextLeftCard>
            </LeftCard>
            <RigthCard style={styles.shadow}>
            <FontAwesome name='clock-o' size={32} color='#FFF'/>
            <TextRigthCard>{lasTask ? houtLasTask: ""}</TextRigthCard>
            </RigthCard>
        </Container>
    )
}

export const styles = StyleSheet.create({
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