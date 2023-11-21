import { Container, Content, TitleContent, LineTitle, TitleBox, Footer, BtnNewTask, BtnActionsArea, BtnActionsText } from "./styles";
import Header from "../../Components/Header";
import CardHeaderTask from "../../Components/CardHeaderTask";
import { useState, useEffect, useContext } from "react";
import FontAwesome from '@expo/vector-icons/FontAwesome';

import { Alert, FlatList, Text } from 'react-native';

import TaskItem from "../../Components/TaskItem";
import ModalNewTask from "../../Components/ModalNewTask";
import ModalFeedback from "../../Components/ModalFeedBack";
import ModalActions from "../../Components/ModalActions";

import { TaskContext } from "../../Context/task";

import api from "../../Services/api";


export default function Home() {
    const [remainingTasks, setRemainingTasks] = useState<any>([])
    const { newTask,handleUpdateTask} = useContext(TaskContext);

    useEffect(() => {
        async function handleGetAllTasks() {

            const dateDay = new Date();
            console.log(dateDay)

            const response = await api.get(`task/get-task-date/${dateDay}`)
                   
            console.log(response.data.tasksArray)
            setRemainingTasks(response.data.tasksArray)
        }

        handleGetAllTasks();
    }, [newTask])


    const [modalNewTaks, setModalNewTask] = useState(false);
    const [modalFeedBack, setModalFeedBack] = useState(false);
    const [modalActions, setModalActions] = useState(false);

    const [currentTask, setCurrentTask] = useState({});

    const totalTask = remainingTasks.filter((item) => item.status !== true);

    let SumTotalPoints = 0;
    const totalPoints = remainingTasks.filter((item:any) => item.status == true);
    const pontuation = totalPoints.map((point:number) => SumTotalPoints+=point.pontuation) 

   let percentage = (totalPoints.length/remainingTasks.length/100) * 100

    function actionModal(type: string, item?: object) {
        if (type == 'task') {
            setModalNewTask(!modalNewTaks)
        }
        else if (type == 'feedback') {
            setModalFeedBack(!modalFeedBack)
            setCurrentTask(item || {})
            
        } else {
            setModalActions(!modalActions)
            setCurrentTask(item || {})

        }
    }

    const removeTask = (id?: string) => {
        Alert.alert('Atenção', 'Deseja remover está tarefa?', [
            {
                text: 'Sim',
                onPress: async () => {
                    console.log('Removendo tarefa ID: ', id);
                    await api.delete(`task/${id}`).then(() => {
                        setRemainingTasks((prevTasks) => prevTasks.filter(item => item._id !== id));
                        setModalActions(!modalActions)
                    }).catch(() => {
                        alert('Erro ao remover a tarefa')
                    })

                }
            },
            {
                text: 'Não'
            }
        ])
    }

    function handleCompleteTask(data:any){
        Alert.alert('Atenção', 'Deseja marcar a tarefa como concluida?', [
            {
                text: 'Sim',
                onPress: async () => {
                    handleUpdateTask(data)
                    /*if(data.status == false){
                        return
                    }
                Alert.alert('TimeWise', 'Oops... Parece que essa tarefa já foi marcada como concluida')*/
                }
            },
            {
                text: 'Não'
            }
        ])
    }

    return (
        <Container>

            <Header pontuation={SumTotalPoints}/>
            <CardHeaderTask />

            <Content>
                <TitleBox>
                    <TitleContent>Tarefas restantes ({totalTask.length})</TitleContent>
                    <LineTitle />
                    
                </TitleBox>
                <FlatList
                    data={remainingTasks}
                    keyExtractor={(item) => item._id.toString()}
                    renderItem={({ item }) => <TaskItem data={item} openModal={actionModal} checkTask={handleCompleteTask} />}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={() => <Text>humm, ainda não à tarefas para carregar</Text>}
                />
                <Footer>
                    <BtnNewTask onPress={() => actionModal("task")}>
                        <FontAwesome name="plus" size={32} color={'#FFF'} />
                    </BtnNewTask>
                </Footer>
            </Content>
            <ModalNewTask show={modalNewTaks} close={() => actionModal('task')} feedback={actionModal} />

            <ModalFeedback show={modalFeedBack} close={() => actionModal('feedback')} data={currentTask}/>

            <ModalActions show={modalActions} close={() => setModalActions(!modalActions)} title={currentTask.description}>
                <BtnActionsArea >
                    <BtnActionsText>Editar</BtnActionsText>
                </BtnActionsArea>
                <BtnActionsArea onPress={() => removeTask(currentTask._id)}>
                    <BtnActionsText>Excluir</BtnActionsText>
                </BtnActionsArea>

            </ModalActions>
            
        </Container>
    )
}