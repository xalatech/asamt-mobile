import styled from 'styled-components';

export const Wrapper = styled.ScrollView`
  padding-left: 20;
  padding-right: 20;
  flex-direction: column;
  display: flex;
`;

export const Google = styled.Image`
  width: 26;
  height: 20;
  marginLeft: 20;
`;

export const SocialButtonText = styled.Text`
  color: #FFFFFF;
  font-size: 16;
  margin-left: 20;
  font-weight: bold;
  align-self: center;
`;

export const InputContainer = styled.View`
  background-color: transparent;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const InputText = styled.Text`
  margin-top: 0;
  color: #000;
  font-size: 16;
  margin-top: 20;
`;

export const SocialText = styled.Text`
  color: #000;
  margin-top: 5px;
  font-size: 16;
`;
export const AuthButton = styled.View`
  margin-top: 10px;
  opacity: ${props => (props.disabled ? 0.3 : 1)};
`;


export const ErrorView = styled.View`
  padding: 4px 2px 0;
`;

export const ErrorMessage = styled.Text`
  color: #bb5555;
`;

