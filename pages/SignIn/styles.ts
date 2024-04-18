import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';


export const Container = styled.View`
flex: 1;
backgroud-color: rgb(192, 192, 192);
`;

export const Content = styled.View`
flex: 1;
align-itens: center;
justify-content: center;
width: 100%;
padding: 24px;
`;

export const Title = styled.Text`
font-size: ${RFValue(18)}px;
color: gray;
margin-bottom: 20px;
fontWeight: bold
`;

