import styled from 'styled-components';

export const Wrapper = styled.View`
  padding-left: 16px;
  margin-bottom: 10px;
`;

export const Link = styled.TouchableOpacity`

`;

export const LinkText = styled.Text`
  color: ${({ theme }) => theme.primaryOrange};
  font-weight: 600;
`;
