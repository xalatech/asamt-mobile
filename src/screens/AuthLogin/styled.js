import styled from 'styled-components';
import { Dimensions, Platform } from 'react-native';

const { height, width } = Dimensions.get('window');
const aspectRatio = height / width;

const isIpad = Platform.OS === 'ios' && aspectRatio < 1.6;
const headerHeight = isIpad ? 320 : 180;

export const BackgroundView = styled.KeyboardAvoidingView`
  background-color: ${({ theme }) => theme.white};
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const HeaderContainer = styled.View`
  align-items: center;
  height: ${headerHeight};
`;

export const HeaderImage = styled.Image`
  height: 100%;
  width: 100%;
`;

export const LogoWrapper = styled.View`
  margin-top: 10;
  justify-content: center ;
  width: 100%;
  height: 40%;
  align-self: flex-start;
  align-items: center;
  position: absolute;
  flex-direction: row;
`;

export const Title = styled.Text`
  font-size: 40;
  font-weight: bold;
  color: ${({ theme }) => theme.primaryOrange};
  margin-left: 15;
`;

export const ButtonContainer = styled.View`
  background-color: ${({ theme, keyboardVisible }) => (keyboardVisible ? theme.liteOrange : theme.primaryOrange)};
  width: 100%;
  height: 30;
  flex-direction: row;
  justify-content: space-around;
`;

export const Touch = styled.TouchableOpacity`
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.white};
  font-size: 16px;
  font-weight: bold;
  opacity: ${props => (props.active ? 1 : 0.5)};
`;

export const ScrollWrapper = styled.ScrollView`

`;
