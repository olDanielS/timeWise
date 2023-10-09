import styled from "styled-components/native";
import BlurView from "expo-blur/build/BlurView";

export const ModalArea = styled.View`
  flex: 1;
  
  justify-content: center;
  //background-color: rgba(252,254,255,0.4);
  align-items: center;

`

export const ModalBody = styled.View`
  background-color: red; 
  min-height: 300px;
  width: 80%;
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
`