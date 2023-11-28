import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    padding: 20px;
`


export const CardsArea = styled.View`
    margin-top: 20px;
    flex-direction: row;
    gap: 10px;
   
`

export const Card = styled.View`
    width: 50%;
    background-color: #40BF62;
    height: 86px;
    border-radius: 20px;
    flex-direction: row;
    padding: 10px;
    flex-direction: column;
   
`
export const TextCardTitle = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #FFFFFF;
    text-align: center;
`
export const TextCardPontuation = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #FFF;
    text-align: center;
    padding-top: 10px;
`


export const ContentTitleArea = styled.View`
    flex-direction: row;
    margin-top: 20px;
    align-items: center;
    gap: 5px;
    margin-bottom: 10px;
`

export const TitleList = styled.Text`
    font-size: 17px;
    font-weight: bold;
    color: #000;
    
`
