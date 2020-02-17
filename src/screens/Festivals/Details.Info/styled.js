import styled from 'styled-components';

export const ModalBackground = styled.View`
  flex: 1;
  align-items: center;
  flexDirection: column;
  justifyContent: space-around;
  background-color: #00000040;
`;

export const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.white};
  height: 80%;
  width: 90%;
  borderRadius: 4;
  display: flex;
  alignItems: center;
  flex-direction: column;
`;

export const Header = styled.View`
  height: 15%;
  width: 100%;
  justify-content: center;
  align-items: center;

`;

export const Title = styled.Text`
  font-size: 20;
  color: #000;
  font-weight: bold;
`;

export const Body = styled.ScrollView`
  width: 100%;
  height: 70%;
  padding: 10px 20px  ;
  border-top-width: 2;
  border-bottom-width: 2;
  border-color: rgba(0, 0, 0, 0.08);
`;

export const Info = styled.Text`
  font-size: 20;
  color: #000;
  margin-bottom: 20;
`;

export const Footer = styled.View`
  height: 15%;
  width: 80%;
  justify-content: center;
  align-items: center;
`;

export const CloseModal = styled.TouchableOpacity`
  height: 25;
  width: 25;
  position: absolute;
  top: 10;
  right: 10;
`;

export const CloseModalImage = styled.Image`
  width: 100%;
  height: 100%;
`;
