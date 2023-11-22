import { Modal, StyleSheet, TouchableWithoutFeedback, Keyboard} from "react-native";
import { CloseButton, ModalHeader, ModalContent,
     InputTask, LabelScore,BoxPrority,BoxTitle, BtnArea, BtnText} from '../ModalNewTask/styles';

import { ModalBody, Btn,ModalStatus,TitleContent,ModalTitle,Submit,SubmitText} from "./styles";
import { BlurView } from "expo-blur";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function ModalFeedBack(props) {
    
    return (
        <Modal
            visible={props.show}
            transparent={true}
            onRequestClose={() => props.close()}
            animationType="slide">
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <BlurView intensity={10} style={styleModal.ModalArea}>
                    <ModalBody style={styleModal.shadow}>
                        <ModalHeader>
                            <ModalTitle>Tarefa Criada</ModalTitle>
                            <CloseButton onPress={() =>props.close()}>
                                <FontAwesome name="close" size={17} color='#7B7B7B' />
                            </CloseButton>
                        </ModalHeader>
                        <ModalContent>
                            <ModalStatus>Sucesso</ModalStatus>
                            <TitleContent>Descrição da tarefa: {props.data.description}</TitleContent>
                            <LabelScore style={{textAlign: 'center'}}>Valor da tarefa: <LabelScore type='point'> {props.data.pontuation} pts</LabelScore></LabelScore>
                        </ModalContent>

                        <BoxPrority style={styleModal.shadow}>
                            <BoxTitle>Nivél de Prioridade</BoxTitle>
                            <BtnArea >
                                <Btn style={{backgroundColor: props.data.priorityLevel === 'low' ? '#00B94A' : '#C2C2C2'}}>
                                    <BtnText>Baixa</BtnText>
                                </Btn>
                                <Btn style={{backgroundColor: props.data.priorityLevel === 'medium' ? '#694993' : '#C2C2C2'}}>
                                    <BtnText>Média</BtnText>
                                </Btn>
                                <Btn  style={{backgroundColor: props.data.priorityLevel === 'high' ? '#EF463A' : '#C2C2C2'}}>
                                    <BtnText>Alta</BtnText>
                                </Btn>
                            </BtnArea>
                        </BoxPrority>

                            <Submit >
                                <SubmitText>Criar uma nova tarefa</SubmitText>
                            </Submit>
                            <Submit >
                                <SubmitText>Editar tarefa</SubmitText>
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