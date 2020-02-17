import styled from 'styled-components';
import { fontWeight } from '@components/core/styled';

export const Btn = styled.TouchableOpacity`
  border-radius: 5px;
  height: 50px;
  width: 100%;
  background-color: ${({ theme, color }) => (color || theme.primaryBlue)};
  justify-content: center;
  opacity: ${props => (props.disabled ? 0.3 : 1)};
`;

export const TextBtn = styled.Text`
  color: ${({ theme }) => theme.white};
  ${fontWeight(700)}
  font-size: 18px;
  text-align: center;
`;
