import styled from 'styled-components';

export const InterestName = styled.Text`
  font-size: 12px;
  color: ${props => (props.isChecked ? props.theme.white : 'black')};
  font-family: 'Nunito';
  text-align: center;
`;

export const Interest = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 0 2px 8px;
  width: 32%;
  height: 99px;
  border-width: 0.5px;
  border-color: #E2E2E5;
  border-radius: 5px;
  background-color: ${({ theme, isChecked }) => (isChecked ? theme.primaryOrange : theme.white)};
`;

export const InterestIcon = styled.Image`
  margin-top: 10px;
  width: 50px;
  height: 50px;
`;

export const CheckWrapper = styled.View`
  position: absolute;
  right: 4px;
  top: 4px;
`;

export const Check = styled.Image`
`;
