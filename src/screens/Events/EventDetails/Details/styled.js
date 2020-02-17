import styled from 'styled-components';

export const Wrapper = styled.View`
  flex: 1;
`;

export const SourceWrapper = styled.View`
  align-items: flex-start;
  width: 90%;
  margin: 2px auto;
`;

export const Source = styled.Text`
  color: ${({ theme }) => theme.primaryBlue};
  font-weight: 600;
  width: 90%;
`;
