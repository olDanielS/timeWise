import { Container, Content, TitleContent, LineTitle, TitleBox, Footer, BtnNewTask,BtnActionsArea, BtnActionsText } from "./styles";
import Header from "../../Components/Header";
import CardHeaderTask from "../../Components/CardHeaderTask";
import { useState } from "react";
import FontAwesome from '@expo/vector-icons/FontAwesome';

import { FlatList } from 'react-native';

import TaskItem from "../../Components/TaskItem";
import ModalNewTask from "../../Components/ModalNewTask";
import ModalFeedback from "../../Components/ModalFeedBack";
import ModalActions from "../../Components/ModalActions";

export default function Home() {
    const [remainingTasks, setRemainingTasks] = useState([
        { id: 1, task: "Completar todas atividades escolares e envia-las dentro do prazo devido" },
        { id: 3, task: "Completar todas atividades escolares e envia-las dentro do prazo devido" },
        { id: 4, task: "Completar todas atividades escolares e envia-las dentro do prazo devido" },
        { id: 5, task: "Completar todas atividades escolares e envia-las dentro do prazo devido" },
        { id: 6, task: "Completar todas atividades escolares e envia-las dentro do prazo devido" },
        { id: 7, task: "Completar todas atividades escolares e envia-las dentro do prazo devido" },

    ])

    const [modalShown, setModalShown] = useState(false)

    function actionModal() {
        setModalShown(!modalShown)
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
                    renderItem={({ item }) => <TaskItem data={item} />}
                    showsVerticalScrollIndicator={false}
                />
                <Footer>
                    <BtnNewTask onPress={() => actionModal()}>
                        <FontAwesome name="plus" size={32} color={'#FFF'} />
                    </BtnNewTask>
                </Footer>
            </Content>
            <ModalNewTask shown={modalShown} close={actionModal}>

            </ModalNewTask>
            <ModalFeedback shown={modalShown} close={actionModal}>

            </ModalFeedback>
            <ModalActions shown={modalShown} close={actionModal} title={'Ações'}>
                <BtnActionsArea >
                    <BtnActionsText>Editar</BtnActionsText>
                </BtnActionsArea>


                <BtnActionsArea>
                    <BtnActionsText>Excluir</BtnActionsText>
                </BtnActionsArea>

            </ModalActions>
        </Container>
    )
}