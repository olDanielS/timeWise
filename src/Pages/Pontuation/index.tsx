import { useState,useEffect, useContext} from 'react';
import { Container, CardsArea, Card, TextCardTitle, TextCardPontuation, TitleList, ContentTitleArea } from './styles';

import Header from '../../Components/Header';
import { stylesShadow } from '../../Components/TaskItem';
import FilterTask from '../../Components/FilterTask';
import CalendarModal from '../../Components/CalendarModal';

import FontAwesome from '@expo/vector-icons/FontAwesome';
import { TouchableOpacity, FlatList, Text, Modal } from 'react-native';

import api from '../../Services/api';

import format from 'date-fns/format';

import { TaskContext } from '../../Context/task';

export default function PontuationScreen() {

    const [totalScore, setTotalScore] = useState(0);
    const [dayScore, setDayScore] = useState([]);
    
    const [dateBalance, setDateBalance] = useState(new Date());

    const [modalVisible, setModalVisible] = useState(false);

    const { newTask} = useContext(TaskContext);

    const [remainingTasks, setRemainingTasks] = useState<any>([])
   
    useEffect(() => {
        async function handleGetAllTasks() {
           
            const response = await api.get(`task/get-task-date/${dateBalance}`)
            setRemainingTasks(response.data.tasksArray)
        }

        async function handleGetPontuation() {

            const response = await api.get(`task/total-score`)     
            setTotalScore(response.data)

        }
        async function handleDayScore() {

            const dateDay = new Date();
            const response = await api.get(`task/get-task-date/${dateDay}`)     

            setDayScore(response.data.tasksArray)
           
        }


        handleDayScore();
        handleGetAllTasks();
        handleGetPontuation();
    }, [newTask,dateBalance ])

    
    let SumTotalPoints = 0;
    const totalPoints = dayScore.filter((item:any) => item.status == true);
    const pontuation = totalPoints.map((point:number) => SumTotalPoints+=point.pontuation) 

    function filterDayMoviments(dateSelected){
        setDateBalance(dateSelected)
       }

    return (
        <Container style={stylesShadow}>
            <Header pontuation={SumTotalPoints} />

            <CardsArea>

                <Card>
                    <TextCardTitle>Pontos acumulados</TextCardTitle>
                    <TextCardPontuation>{totalScore.totalScore} pts</TextCardPontuation>
                </Card>
                <Card>
                    <TextCardTitle>Pontuação diaria</TextCardTitle>
                    <TextCardPontuation>{SumTotalPoints} pts</TextCardPontuation>
                </Card>
            </CardsArea>

            <ContentTitleArea>
                <TitleList>Filtrar por data: {format(new Date(dateBalance),'dd/MM//yyyy')}</TitleList>
                <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                    <FontAwesome name='calendar' size={24} color='#40BF62' />
                </TouchableOpacity>
            </ContentTitleArea>

            <FlatList
                data={remainingTasks}
                keyExtractor={(item) => item._id.toString()}
                renderItem={({ item }) => <FilterTask data={item} />}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => <Text>humm, não à tarefas para carregar</Text>}
            />
             <Modal visible={modalVisible} animationType='fade' transparent>
              <CalendarModal 
              setVisible={() => setModalVisible(false)}
              handleFilter={filterDayMoviments}
              />
          </Modal>
        </Container>
    )
}