import styled from "styled-components/native";

export const ModalBody = styled.View`
  background-color: #fff; 
  min-height: 300px;
  width: 85%;
  border-radius: 10px;
  padding: 20px;
  align-items: center;

`

export const Btn = styled.View`
  flex-direction: row;
  background-color: #C2C2C2;
  padding: 2px 15px 2px 15px;
  border-radius: 10px;
`
export const ModalTitle = styled.Text`
  font-size: 24px;
  color: #000;
    flex-grow: 1;
  text-align: center;
  font-weight: 500;
  padding-top: 10px;

  margin-left: 10px;
`
export const ModalStatus = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: #4285F4;
  text-align: center;
  margin-top: -20px;
  margin-bottom: 10px;
`
export const TitleContent = styled.Text`
  font-size: 15px;
  font-weight: 500;
  color: #000;
  text-align: center;
`
export const Submit = styled.TouchableOpacity`
  background-color:#4285F4;
  margin: 0px auto;
  margin-top: 5px;
  padding: 5px;
  border-radius: 5px;
  width: 70%;
  align-items: center;
`
export const SubmitText = styled.Text`
  font-size: 16px;
  color: #FFF;
  font-weight: bold;

`