import styled from 'styled-components/native';


export const Modal = styled.Modal``

export const ModalArea = styled.View`
  flex: 1;
  background-color: rgba(0,0,0,0.5);
  justify-content: flex-end;
`

export const ModalBody = styled.View`
  background-color: #FFF; 
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  min-height: 300px;
  padding: 10px 20px 40px 20px;
`

export const CloseButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
`

export const ModalHeader = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const ModalTitle = styled.Text`
  flex-grow: 1;
  text-align: center;
  font-size: 16px;
  width: 10px;
  color: #3f3f3f
`

