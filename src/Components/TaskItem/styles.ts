import styled from "styled-components/native"

export const Container = styled.View`
    background-color: white;
    height: 80px;
    width: 100%;
    align-items: center;
    margin-bottom: 10px;
    justify-content: center;
    border-radius: 20px;
    padding: 10px;
    justify-content: space-evenly;
    flex-direction: row;
` 

export const Title = styled.Text`
    font-weight: 500;
    font-size: 14px;
    width: 70%;
` 
export const BoxPoint = styled.View`
    align-items: center;
    justify-content: center;
    padding: 0px;
` 
export const Point = styled.Text`
    color: ${props => props.side == 'Up' ? '#4285F4' : '#000000'};
    font-size: ${props => props.side == 'Up' ? '24px'  : '16px'};
    font-weight: bold;

` 