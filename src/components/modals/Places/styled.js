import styled from 'styled-components';
import { Platform, Dimensions } from 'react-native';

import backIos from '@images/Back.png';
import backAndroid from '@images/Group.png';

const platform = Platform.OS;
const isIphoneX = Dimensions.get('window').height === 812;
const iosStatusBarMargin = (platform === 'ios' && isIphoneX) ? 44 : 0;

export const ModalBackground = styled.View`
  flex: 1;
  background-color: #000000;
`;

export const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.white};
  height: 100%;
  width: 100%;
`;

export const SearchWrapper = styled.View`
  width: 100%;
  margin-top: 20;
  align-items: center;
  display: flex;
  flex-direction: row;
  padding: 5px 20px;
`;

export const Header = styled.View`
  margin-top: ${platform === 'ios' ? iosStatusBarMargin : 0};
  padding-top: ${platform === 'ios' ? 10 : 0};
  height: 54;
  background-color: ${({ theme }) => theme.primaryOrange};
  display: flex;
  flex-direction: row;
`;

export const TextWrapper = styled.View`
  width: 33%;
  align-items: center;
  justify-content: center;
`;

export const SearchText = styled.Text`
  color: #FFFFFF;
  font-size: 18;
`;

export const BackButton = styled.TouchableOpacity`
  width: 33%;
  height: 100%;
  align-items: center;
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.primaryOrange};
`;

export const BackText = styled.Text`
  color: #FFFFFF;
  font-size: 18;
`;

export const BackIcon = styled.Image.attrs({
  source: platform === 'ios' ? backIos : backAndroid,
})`
  width: 12;
  height: 20;
  margin-left: 10;
  margin-right: 10;
`;

export const SliderWrapper = styled.View`
  margin: 20px 20px 0;
  background-color: #FFFFFF;
  height: 50px;
  justify-content: center;
  align-items: center;
`;

export const StyledSlider = styled.Slider`
  width: 90%;
`;

export const SliderValueText = styled.Text`
  font-size: 20px;
`;
