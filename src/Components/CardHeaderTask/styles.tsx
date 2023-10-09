import styled from "styled-components/native";


export const Container = styled.View`
    margin-top: 15px;
    width: 100%;
    height: 86px;
    flex-direction: row;
`
export const LeftCard = styled.View`
    width: 80%;
    background-color: #40BF62;
    height: 86px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    padding: 10px;
   
`
export const RigthCard = styled.View`
    width: 20%;
    background-color:#4ED973;
    height: 86px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
`
export const TextLeftCard = styled.Text`
    font-size: 16px;
    color:#FFF;
    font-weight: 600;
    text-align: center;
    width: 80%;
    
`
export const TextRigthCard = styled.Text`
    font-size: 12px;
    color:#FFF;
    font-weight: 400;
    text-align: justify;
    margin-top: 5px;
    
`
export const CheckPoint = styled.View`
    background-color: #4ED973 ;
    padding: 5px;
    border-radius: 20px;
    margin-right: 10px;
`
export const Content = styled.View`
    flex: 1;
    background-color: red;
`
