import styled from "styled-components/native";


export const ModalBody = styled.View`
  background-color: #fff; 
  min-height: 250px;
  width: 85%;
  border-radius: 10px;
  padding: 10px;
`

export const CloseButton = styled.TouchableOpacity`
  width: 20px;
  height: 20px;
  background-color: #D9D9D9;
  justify-content: center;
  align-items:center;
  border-radius: 20px;
`

export const ModalHeader = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const ModalTitle = styled.Text`
  flex-grow: 1;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  padding-top: 10px;
  
`