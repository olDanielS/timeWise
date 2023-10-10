import { Modal, StyleSheet, TouchableWithoutFeedback, Keyboard} from "react-native";
import { ModalBody, CloseButton, ModalHeader, ModalTitle, ModalContent, TitleContent,
     InputTask, LabelScore,BoxPrority,BoxTitle, BtnArea, Btn, BtnText, Submit, SubmitText} from './styles'
import { BlurView } from "expo-blur";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {useState } from "react";

export default function ModalNewTask(props) {

    const [priorityLevel, setPriorityLevel] = useState('');

    return (
        <Modal
            visible={props.shown}
            transparent={true}
            onRequestClose={() => props.close()}
            animationType="fade"

        >
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <BlurView intensity={10} style={styleModal.ModalArea}>
                    <ModalBody style={styleModal.shadow}>
                        <ModalHeader>
                            <ModalTitle>Criar uma nova tarefa</ModalTitle>
                            <CloseButton onPress={() =>props.close()}>
                                <FontAwesome name="close" size={17} color='#7B7B7B' />
                            </CloseButton>
                        </ModalHeader>
                        <ModalContent>
                            <TitleContent>Descrição da tarefa</TitleContent>
                            <InputTask placeholder='Nova tarefa'/>
                            <LabelScore>Pontuação: <LabelScore type='point'> 00 pts</LabelScore></LabelScore>
                        </ModalContent>

                        <BoxPrority style={styleModal.shadow}>
                            <BoxTitle>Nivél de Prioridade</BoxTitle>
                            <BtnArea>
                                <Btn onPress={() => setPriorityLevel('low')} style={{backgroundColor: priorityLevel === 'low' ? '#00B94A' : '#C2C2C2'}}>
                                    <BtnText>Baixa</BtnText>
                                </Btn>
                                <Btn onPress={() => setPriorityLevel('medium')} style={{backgroundColor: priorityLevel === 'medium' ? '#694993' : '#C2C2C2'}}>
                                    <BtnText>Média</BtnText>
                                </Btn>
                                <Btn onPress={() => setPriorityLevel('high')} style={{backgroundColor: priorityLevel === 'high' ? '#EF463A' : '#C2C2C2'}}>
                                    <BtnText>Alta</BtnText>
                                </Btn>
                            </BtnArea>
                        </BoxPrority>
                            <Submit>
                                <SubmitText>Criar Tarefa</SubmitText>
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