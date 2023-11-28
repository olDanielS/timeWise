import styled from "styled-components/native"

export const Container = styled.TouchableOpacity`
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
    margin: 5px;
` 

export const Title = styled.Text`
    font-weight: 500;
    font-size: 14px;
    width: 70%;
    color: ${(props) => props.status == true ? '#dcdcdc': '#000'};
    text-decoration: ${(props) => props.status == true ? 'line-through': 'none'};
    
` 
export const BoxPoint = styled.View`
    align-items: center;
    justify-content: center;
    padding: 0px;
` 

interface PointProps{
    side: string;
}

export const Point = styled.Text<PointProps>`
    color: ${(props) => props.side == 'Up' ? '#4285F4' : '#000000'};
    font-size: ${props => props.side == 'Up' ? '24px'  : '16px'};
    font-weight: bold;

` 

export const BtnActionsArea = styled.TouchableOpacity`
    height: 45px;
    background-color: #DCDCDC;
    border-width: 1px;
    border-color: #121214;
    border-radius: 20px;
    margin-Top: 20px;
    align-items: center;
    justify-content: center;
    font-size: 16px;
`

export const BtnActionsText = styled.Text`
    font-size: 18px;
    color: #000;
    font-weight: bold;

`