import { CloseButton, Modal, ModalArea, ModalBody, ModalHeader, ModalTitle } from "./styles"
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { ModelTypeProps } from "../../Interfaces/ModelTypePros/ModalInterfaces";


export default ({close, show, children, title}: ModelTypeProps) => {
  return (
    <TouchableWithoutFeedback onPress={() => close()}>
      <Modal transparent visible={show} animationType="slide" onRequestClose={() => close()}>
        <ModalArea>
          <ModalBody>
            <ModalHeader>
              <ModalTitle>{title}</ModalTitle>
              <CloseButton><MaterialCommunityIcons name="menu-down" size={40} onPress={() => close()} /></CloseButton>
            </ModalHeader>
            {children}
          </ModalBody>
        </ModalArea>
      </Modal>
    </TouchableWithoutFeedback>
  )
}