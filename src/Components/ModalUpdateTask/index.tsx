import { useState, useContext, useEffect } from "react";
import { Modal, StyleSheet, TouchableWithoutFeedback, Keyboard } from "react-native";
import {
    ModalBody, CloseButton, ModalHeader, ModalTitle, ModalContent, TitleContent,
    InputTask, LabelScore, BoxPrority, BoxTitle, BtnArea, Btn, BtnText, Submit, SubmitText
} from './styles'
import { BlurView } from "expo-blur";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { TaskContext } from "../../Context/task";
import { Alert } from "react-native";
import { ModelTypeProps } from "../../Interfaces/ModelTypePros/ModalInterfaces";
import { TaskProps } from "../../Interfaces/TasksInterface/TaskInterface";

export default function ModalUpdateTask({ close, show, feedback, data }: ModelTypeProps) {

    const { handleUpdateTask } = useContext(TaskContext)

    const [descriptionTask, setDescriptionTask] = useState('');
    const [priorityLevel, setPriorityLevel] = useState('');
    const [pontuation, setPontuation] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            await setDescriptionTask(data.description)
            await setPriorityLevel(data.priorityLevel)
            await setPontuation(data.pontuation)
            console.log(descriptionTask)
        }
        fetchData()
    }, [data])


    async function handleNewTask() {
        if (!descriptionTask || !priorityLevel) {
            Alert.alert('Ops', 'Os campos não podem ficar vazios')

            return

        }
        const response = await handleUpdateTask({ descriptionTask, priorityLevel, pontuation, _id: data._id })
        if (response.error) {
            Alert.alert('Oops', 'Parece que algo deu errado :(\nVerifique se a tarefa já existe')
        } else {
            feedback('feedback', response)
            feedback('action', response)

        }
        setDescriptionTask('')
        setPriorityLevel('')
        setPontuation(0);
        close()
    }

    function handlePontuation(task: string) {
        if (task == 'low') {
            setPriorityLevel('low')
            setPontuation(5)
        }
        else if (task == 'medium') {
            setPriorityLevel('medium')
            setPontuation(10)
        }
        else if (task == 'high') {
            setPriorityLevel('high')
            setPontuation(15)
        }
        else {
            setPriorityLevel('')
            setPontuation(0)
        }
    }

    function closeModal() {
        close();

    }


    return (
        <Modal
            visible={show}
            transparent={true}
            onRequestClose={() => closeModal()}
            animationType="slide">
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <BlurView intensity={10} style={styleModal.ModalArea}>
                    <ModalBody style={styleModal.shadow}>
                        <ModalHeader>
                            <ModalTitle>Atualização de tarefa</ModalTitle>
                            <CloseButton onPress={() => closeModal()}>
                                <FontAwesome name="close" size={17} color='#7B7B7B' />
                            </CloseButton>
                        </ModalHeader>
                        <ModalContent>
                            <TitleContent>Descrição da tarefa</TitleContent>
                            <InputTask
                                placeholder='Nova tarefa'
                                value={descriptionTask}
                                onChangeText={setDescriptionTask}
                            />
                            <LabelScore>Pontuação: <LabelScore type='point'> {pontuation} pts</LabelScore></LabelScore>
                        </ModalContent>

                        <BoxPrority style={styleModal.shadow}>
                            <BoxTitle>Nivél de Prioridade</BoxTitle>
                            <BtnArea>
                                <Btn onPress={() => handlePontuation('low')} style={{ backgroundColor: priorityLevel === 'low' ? '#00B94A' : '#C2C2C2' }}>
                                    <BtnText>Baixa</BtnText>
                                </Btn>
                                <Btn onPress={() => handlePontuation('medium')} style={{ backgroundColor: priorityLevel === 'medium' ? '#694993' : '#C2C2C2' }}>
                                    <BtnText>Média</BtnText>
                                </Btn>
                                <Btn onPress={() => handlePontuation('high')} style={{ backgroundColor: priorityLevel === 'high' ? '#EF463A' : '#C2C2C2' }}>
                                    <BtnText>Alta</BtnText>
                                </Btn>
                            </BtnArea>
                        </BoxPrority>

                        <Submit onPress={() => handleNewTask()}>
                            <SubmitText>Atualizar</SubmitText>
                        </Submit>
                    </ModalBody>
                </BlurView>
            </TouchableWithoutFeedback>
        </Modal>
    )

}

const styleModal = StyleSheet.create({
    ModalArea: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
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
})