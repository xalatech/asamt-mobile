import styled from 'styled-components';
import { fontWeight } from '@components/core/styled';

export const LogoutWrapper = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.secondaryOrange};
  height: 50px;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: flex-end;
`;

export const LogoutText = styled.Text`
  color: ${({ theme }) => theme.white};
  text-align: left;
  font-size: 13px;
  ${fontWeight(400)}
`;

export const LogoutIcon = styled.Image`
  margin-right: 8px;
`;
