import styled from 'styled-components';

export const ModalBackground = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.6);
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.white};
  padding-top: 10;
  padding-bottom: 10;
  height: 70%;
  width: 90%;
  border-radius: 4;
  justify-content: center;
`;

export const Button = styled.TouchableOpacity`
  width: 90%;
  height: 10%;
  background-color: ${({ theme }) => theme.primaryBlue};
  align-self: center;
  justify-content: center;
  align-items: center;
  border-radius: 5;
`;

export const ButtonText = styled.Text`
  color: #FFFFFF;
  font-size: 18;
`;

export const CancelButton = styled.TouchableOpacity`
  height: 10%;
  width: 20%;
  align-self: center;
  justify-content: center;
  align-items: center;
`;

export const CancelText = styled.Text`
  color: #A5A5A5;
  font-size: 18;
`;

export const Arrow = styled.Image`
  width: 9;
  height: 15;
`;
