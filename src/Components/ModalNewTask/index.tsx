import { Modal, Text } from "react-native";
import { ModalArea, ModalBody } from './styles'
import { BlurView } from "expo-blur";

export default function ModalNewTask(props) {
    return (
        <Modal
            visible={props.shown}
            transparent={true}

        >
            <BlurView intensity={10} style={ModalArea}>
                
                    <ModalBody>

                    </ModalBody>
            </BlurView>

        </Modal>
    )

}