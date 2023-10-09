import { Modal, StyleSheet, TouchableWithoutFeedback} from "react-native";
import { ModalBody, CloseButton, ModalHeader, ModalTitle} from './styles'
import { BlurView } from "expo-blur";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function ModalNewTask(props) {
    return (
        <Modal
            visible={props.shown}
            transparent={true}
            onRequestClose={() => props.close()}
            animationType="fade"

        >
            <TouchableWithoutFeedback onPress={() => props.close()}>
                <BlurView intensity={10} style={styleModal.ModalArea}>
                    <ModalBody style={styleModal.shadow}>
                        <ModalHeader>
                            <ModalTitle>Criar uma nova tarefa</ModalTitle>
                            <CloseButton onPress={() =>props.close()}>
                                <FontAwesome name="close" size={17} color='#7B7B7B' />
                            </CloseButton>
                        </ModalHeader>
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