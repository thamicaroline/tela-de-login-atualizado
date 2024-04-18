import React from 'react';

import { Container, Title} from './styles';
import { TouchableOpacityProps } from 'react-native';
import { PropsWithChildren } from "react";

interface ButtonProps extends TouchableOpacityProps {

}
export const Button: React.FunctionComponent<ButtonProps> = ({ title, ...othersProps }:PropsWithChildren<ButtonProps>) => {
    return <Container{...othersProps}>
    <Title>{title}</Title>
    </Container>
};


