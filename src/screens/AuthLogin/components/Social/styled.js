import styled from 'styled-components';

export const FacebookButton = styled.TouchableOpacity`
  height: 50px;
  width: 48%;
  background-color: #3b579d;
  border-radius: 5px;
  align-items: center;
  align-self: center;
  margin-top: 10px;
  margin-bottom: 10px;
  justify-content: center;
  flex-direction: row;
  opacity: ${props => (props.disabled ? 0.3 : 1)};
`;

export const GoogleButton = styled.TouchableOpacity`
  height: 50px;
  width: 48%;
  background-color: #DF493A;
  border-radius: 5px;
  align-items: center;
  flex-direction: row;
  align-self: center;
  margin-top: 10px;
  margin-bottom: 10px;
  justify-content: center;
  opacity: ${props => (props.disabled ? 0.3 : 1)};
`;

export const SocialView = styled.View`
  flex: 2;
  flex-direction: row;
  justify-content: space-between;
`;

export const AuthText = styled.Text`
  font-size: 18;
  font-weight: bold;
  color: white;
`;
export const Facebook = styled.Image`
  width: 20;
  height: 20;
  margin-right: 15%;
`;

export const Google = styled.Image`
  width: 25;
  height: 25;
  margin-right: 15%;
`;
