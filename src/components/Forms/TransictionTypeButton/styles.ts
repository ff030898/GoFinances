import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

interface IconProps {
  type: "up" | "down";
}

interface ContainerProps {
  isActive: boolean
  type: "up" | "down";
}

export const Container = styled(TouchableOpacity)<ContainerProps>`
  width: 48%;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  
  border-width: 1.5px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.text};
  border-radius: 5px;

  padding: 16px

  
  ${({ isActive, type }) => isActive && type === 'up' && css`
    background-color: #b8f5b5;
  `};
  ${({ isActive, type }) => isActive && type === 'down' && css`
    background-color: #ffbdb9;
  `};

  
`
export const Icon = styled(Feather) <IconProps>`
  font-size: ${RFValue(24)}px;
  margin-right: 12px;
  color: ${({ theme, type }) => type === 'up' ? theme.colors.success : theme.colors.attention};
`

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  
`