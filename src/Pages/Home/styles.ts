import styled from "styled-components/native";


export const Container = styled.View `
    flex: 1;
    background-color: #FCFEFF;
    padding: 20px;
`
export const Content = styled.View`
    flex: 1;
    margin-top: 20px;
`
export const TitleBox = styled.View`
    align-items: center;
`

export const TitleContent = styled.Text`
    text-align: center;
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 5px;
`
export const LineTitle = styled.Text`
    border: 1px;
    height: 1px;
    width: 90%;
    text-align: center;
    margin-bottom: 20px;
    border-color: #000;
    background-color: #000;
`

export const Footer = styled.View`
align-items: flex-end;
height: 15%;
`

export const BtnNewTask = styled.TouchableOpacity`
    background-color: #40BF62;
    width: 50px;
    height: 50px;
    align-items: center;
    justify-content: center;
    border-radius: 10px;


`
