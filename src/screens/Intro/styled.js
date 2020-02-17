import styled from 'styled-components';
import Text from '@components/core/Text';

export const BackgroundView = styled.View`
  background-color: ${props => props.theme.primaryOrange};
  flex: 1;
  justify-content: space-between;
`;

export const ContainerView = styled.View`
  width: 100%;
  height: 45%;
  padding: 0 20px;
  justify-content: space-around;
`;

export const Header = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: 20%;
`;

export const DescriptionView = styled.View`
  margin-bottom: 40px;
  width: 100%;
  align-items: center;
`;

export const Subtitle = styled(Text)`
  font-size: 22px;
  color: ${({ theme }) => theme.white};
  text-align: center;
`;

export const Description = styled(Text)`
  font-size: 14px;
  color: ${({ theme }) => theme.white};
  margin-top: 5px;
`;

export const InputContainer = styled.View`
  display: flex;
  width: 100%;
  flex-direction: row;
`;

export const ButtonContainer = styled.View`
  width: 100%;
  align-items: center;
  justify-content: space-around;
  padding: 5px 20px;
`;

export const HintButton = styled.TouchableOpacity`
  align-items: center;
  justify-content:center;
  width:32;
  height:32;
  background-color: ${({ theme }) => theme.primaryOrange};
  border-radius:30;
  margin-bottom: 19px;
`;

export const HintText = styled(Text)`
  font-size: 18;
  color: #FFFFFF;
`;

export const LoginText = styled(Text)`
  font-size: 18;
  font-weight: bold;
  color: white;
`;

export const GoButton = styled.TouchableOpacity`
  width: 62px;
  height: 45px;
  background: ${({ theme }) => theme.primaryOrange};
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 0;
  border-top-right-radius: 5px;
  align-items: center;
  justify-content: center;
`;

export const FestivalTouch = styled.TouchableOpacity`
  margin-bottom: 19px;
`;

export const FestivalImage = styled.Image`
  width: 158px;
  height: 50px;
`;

export const Loader = styled.ActivityIndicator.attrs({
  color: ({ theme }) => theme.white,
  size: 'large',
})`
  margin-bottom: 10px;
`;

export const HeaderWrapper = styled.View`
  justify-content: space-between;
  margin-bottom: 2px;
`;

export const InputWrapper = styled.View`
  margin-top: ${props => (props.visible ? '10%' : 0)};
  margin-bottom: 20px;
`;

export const Logo = styled.Image`
  margin-right: 10px;
`;

export const ButtonWrapper = styled.View`
  margin-bottom: 10px;
  width: 100%;
`;
