import { Container, LeftCard, RigthCard, TextLeftCard,TextRigthCard,CheckPoint} from './styles';
import { StyleSheet } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect,useContext } from 'react';

import { TaskContext } from "../../Context/task";
import { TaskProps } from '../../Interfaces/TasksInterface/TaskInterface';

import { useIsFocused } from '@react-navigation/native'; 

import {format } from 'date-fns'


export default function CardHeaderTask(props) {

    const { newTask} = useContext(TaskContext);
    const [lastTask, setLastTask] = useState<TaskProps>();
    

    const isFocused = useIsFocused();

    useEffect(() => {
        const getTask = async () => {
            const resp = await AsyncStorage.getItem('@lastTask');
            setLastTask(JSON.parse(resp))         
        }
        getTask();
    },[newTask,isFocused])
    return (
        <Container style={styles.shadow}>
            <LeftCard>
                <CheckPoint style={styles.shadow}>
                    <FontAwesome name='check' size={20} color='#FFF'/>
                </CheckPoint>
            <TextLeftCard>{lastTask ? lastTask.description: "Conclua uma tarefa para ela aparecer aqui"}</TextLeftCard>
            </LeftCard>
            <RigthCard style={styles.shadow}>
            <FontAwesome name='clock-o' size={32} color='#FFF'/>
            <TextRigthCard>{lastTask ? format(new Date(lastTask.updatedAt),'dd/MM/yyyy') : ""}</TextRigthCard>
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