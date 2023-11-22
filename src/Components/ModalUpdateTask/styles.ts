import styled from "styled-components/native";


export const ModalBody = styled.View`
  background-color: #fff; 
  min-height: 300px;
  width: 85%;
  border-radius: 10px;
  padding: 20px;

`

export const CloseButton = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
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
export const ModalContent = styled.View`
  margin-top: 10px;

`
export const TitleContent = styled.Text`
font-size: 14px;
font-weight: 600;
padding-left: 5px;
`
export const InputTask = styled.TextInput`
  border: 1px;
  border-radius: 10px;
  border-color: #DCDCDC;
  padding: 5px;
  padding-left: 15px;
  font-size: 16px;
  margin-top: 5px;

`
export const LabelScore = styled.Text`
  padding-left: 5px;
  font-size: 14px;
  font-weight: 600;
  margin-top: 10px;
  color: ${props => props.type == 'point' ? '#4285F4' :'#000'};
`
export const BoxPrority = styled.View`
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 0px auto;
  margin-top: 5px;
  border-radius: 10px;
  padding: 10px;
  background-color: #FFF;
  border-radius: 10px;
`
export const BoxTitle = styled.Text`
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: 500;
`
export const BtnArea = styled.View`
  flex-direction: row;
  gap: 5px;
`
export const Btn = styled.TouchableOpacity`
  flex-direction: row;
  background-color: #C2C2C2;
  padding: 2px 15px 2px 15px;
  border-radius: 10px;
`
export const BtnText = styled.Text`
  font-weight: 500;
  color: #FFF
`
export const Submit = styled.TouchableOpacity`
  background-color:#4285F4;
  margin: 0px auto;
  margin-top: 15px;
  padding: 10px;
  border-radius: 10px;
`
export const SubmitText = styled.Text`
  font-size: 18px;
  color: #FFF;
  font-weight: bold;

`

