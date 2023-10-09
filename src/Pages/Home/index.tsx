import { Container, Content, TitleContent, LineTitle, TitleBox } from "./styles";
import Header from "../../Components/Header";
import CardHeaderTask from "../../Components/CardHeaderTask";
import { useState } from "react";

import { FlatList } from 'react-native';

import TaskItem from "../../Components/TaskItem";

export default function Home() {
    const [remainingTasks, setRemainingTasks] = useState([
        { id: 1, task: "Completar todas atividades escolares e envia-las dentro do prazo devido" },
        { id: 3, task: "Completar todas atividades escolares e envia-las dentro do prazo devido" },
        { id: 4, task: "Completar todas atividades escolares e envia-las dentro do prazo devido" },
        { id: 5, task: "Completar todas atividades escolares e envia-las dentro do prazo devido" },
        { id: 6, task: "Completar todas atividades escolares e envia-las dentro do prazo devido" },
        { id: 7, task: "Completar todas atividades escolares e envia-las dentro do prazo devido" },

    ])

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
            </Content>

        </Container>
    )
}