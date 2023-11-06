import { Container, Content, TitleContent, LineTitle, TitleBox, Footer, BtnNewTask,BtnActionsArea, BtnActionsText } from "./styles";
import Header from "../../Components/Header";
import CardHeaderTask from "../../Components/CardHeaderTask";
import { useState } from "react";
import FontAwesome from '@expo/vector-icons/FontAwesome';

import { Alert, FlatList, Text } from 'react-native';

import TaskItem from "../../Components/TaskItem";
import ModalNewTask from "../../Components/ModalNewTask";
import ModalFeedback from "../../Components/ModalFeedBack";
import ModalActions from "../../Components/ModalActions";

export default function Home() {
    const [remainingTasks, setRemainingTasks] = useState([
        { id: 1, task: "Completar todas atividades escolares e envia-las dentro do prazo devido" },
        { id: 3, task: "Completar todas atividades escolares e envia-las dentro do prazo devido", status: true },
        { id: 4, task: "Completar todas atividades escolares e envia-las dentro do prazo devido" },
        { id: 5, task: "Completar todas atividades escolares e envia-las dentro do prazo devido" },
        { id: 6, task: "Completar todas atividades escolares e envia-las dentro do prazo devido" },
        { id: 7, task: "Completar todas atividades escolares e envia-las dentro do prazo devido" },

    ])

    const [modalNewTaks, setModalNewTask] = useState(false);
    const [modalFeedBack, setModalFeedBack] = useState(false);
    const [modalActions, setModalActions] = useState(false);

    const [currentTask, setCurrentTask] = useState({});

    function actionModal(type:string, item?:object) {
        if(type == 'task'){
            setModalNewTask(!modalNewTaks)
        }
        else if(type == 'feedback'){
            setModalFeedBack(!modalFeedBack)
        }else{
            setModalActions(!modalActions)
            setCurrentTask(item|| {})
            console.log(item)
        }
    }

    const removeTask = (id?:string) => {
        Alert.alert('Atenção', 'Deseja remover está tarefa?', [
          {
            text: 'Sim',
            onPress: () => {
              //API
                console.log('Removendo tarefa ID: ', id);
                setModalActions(!modalActions)
            }
          },
          {
            text: 'Não'
          }
        ])
      }

    return (
        <Container>
            <Header />
            <CardHeaderTask />

            <Content>
                <TitleBox>
                    <TitleContent>Tarefas restantes (24)</TitleContent>
                    <LineTitle />
                </TitleBox>
                <FlatList
                    data={remainingTasks}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <TaskItem data={item} openModal={actionModal}/>}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={() => <Text>humm, ainda não à tarefas para carregar</Text>}
                />
                <Footer>
                    <BtnNewTask onPress={() => actionModal("task")}>
                        <FontAwesome name="plus" size={32} color={'#FFF'} />
                    </BtnNewTask>
                </Footer>
            </Content>
            <ModalNewTask show={modalNewTaks} close={() => actionModal('task')}/>

            <ModalFeedback show={modalFeedBack} close={() => actionModal('feedback')}/>

            <ModalActions show={modalActions} close={() => setModalActions(!modalActions)} title={currentTask.task}>
                <BtnActionsArea >
                    <BtnActionsText>Editar</BtnActionsText>
                </BtnActionsArea>
                <BtnActionsArea onPress={() => removeTask(currentTask.id)}>
                    <BtnActionsText>Excluir</BtnActionsText>
                </BtnActionsArea>

            </ModalActions>
        </Container>
    )
}