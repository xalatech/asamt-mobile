import styled from 'styled-components';

export const Wrapper = styled.ScrollView`
  padding-left: 20;
  padding-right: 20;
  flex-direction: column;
  display: flex;
`;

export const InputContainer = styled.View`
  flex: 5;
  background-color: transparent;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const InputText = styled.Text`
  color: #000;
  font-size: 16;
  margin-top: 20;
`;

export const SocialText = styled.Text`
  color: #000;
  font-size: 16;
  margin-top: 5px;
`;

export const AuthButton = styled.TouchableOpacity`
  height: 50px;
  width: 100%;
  background-color: ${({ theme }) => theme.primaryBlue};
  border-radius: 5px;
  align-items: center;
  align-self: center;
  margin-top: 10px;
  margin-bottom: 10px;
  justify-content: center;
  opacity: ${props => (props.disabled ? 0.3 : 1)};
`;

export const FacebookButton = styled.TouchableOpacity`
  height: 50px;
  width: 48%;
  background-color: ${({ theme }) => theme.primaryBlue};
  border-radius: 5px;
  align-items: center;
  align-self: center;
  margin-top: 10px;
  margin-bottom: 10px;
  justify-content: center;
  opacity: ${props => (props.disabled ? 0.3 : 1)};
`;

export const GoogleButton = styled.TouchableOpacity`
  height: 50px;
  width: 48%;
  background-color: #DF493A;
  border-radius: 5px;
  align-items: center;
  align-self: center;
  margin-top: 10px;
  margin-bottom: 10px;
  justify-content: center;
  opacity: ${props => (props.disabled ? 0.3 : 1)};
`;
export const AuthText = styled.Text`
  font-size: 18;
  font-weight: bold;
  color: white;
`;

export const ErrorView = styled.View`
  padding: 2px 32px 0;
`;
export const SocialView = styled.View`
  flex: 2;
  flex-direction: row;
  justify-content: space-between;
`;
export const ErrorMessage = styled.Text`
  color: #bb5555;
  text-align: center;
`;
