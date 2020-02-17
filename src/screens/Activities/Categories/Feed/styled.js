import styled from 'styled-components';

export const Wrapper = styled.View`
  width: 90%;
  margin: 0 auto;
  flex: 1;
`;

export const ShowCategoryBtnWrapper = styled.View`
  width: 100%;
  height: 53px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-top-width: 0;
  shadow-color: #000;
  shadow-offset: 0px 1px;
  shadow-opacity: 0.3;
  shadow-radius: 2;
`;

export const BtnContainer = styled.View`
  width: 100%;
`;

export const ControlPanel = styled.View`
  min-height: 40px;
  background-color: ${({ theme }) => theme.liteOrange};
  width: 100%;
`;

export const ButtonsWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  margin: auto;
`;

export const PanelButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 50%;
  border-right-color: ${({ theme }) => theme.liteOrange};
  height: 100%;
`;

export const DatePickerText = styled.Text`
  color: ${({ theme }) => theme.grey};
  text-align: center;
  font-size: 14px;
`;

export const Arrow = styled.Image`
  margin-top: 3;
  margin-left: 8;
`;

