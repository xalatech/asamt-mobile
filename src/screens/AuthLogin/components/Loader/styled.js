import styled from 'styled-components';

export const ModalBackground = styled.View`
  flex: 1;
  alignItems: center;
  flexDirection: column;
  justifyContent: space-around;
  background-color: #00000040;
`;

export const ActivityIndicatorWrapper = styled.View`
  background-color: ${({ theme }) => theme.white};
  height: 100;
  width: 100;
  borderRadius: 10;
  display: flex;
  alignItems: center;
  justifyContent: space-around;
`;
