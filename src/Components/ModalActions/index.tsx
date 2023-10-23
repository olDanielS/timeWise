import { CloseButton, Modal, ModalArea, ModalBody, ModalHeader, ModalTitle } from "./styles"
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { TouchableWithoutFeedback, Keyboard } from 'react-native';

type TypeProps = {
    show: () => any,
    close: () => any,
    title?: string,
    children: any
  }

export default (props:TypeProps) => {
  return (
    <TouchableWithoutFeedback onPress={() => props.close()}>
      <Modal transparent visible={true} animationType="slide" onRequestClose={() => props.close()}>
        <ModalArea>
          <ModalBody>
            <ModalHeader>
              <ModalTitle>{props.title}</ModalTitle>
              <CloseButton><MaterialCommunityIcons name="menu-down" size={40} onPress={() => props.close()} /></CloseButton>
            </ModalHeader>
            {props.children}
          </ModalBody>
        </ModalArea>
      </Modal>
    </TouchableWithoutFeedback>
  )
}