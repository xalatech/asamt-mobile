import styled from 'styled-components';

export const ControlPanel = styled.View`
  height: 40px;
  flex-direction: row;
  background-color: ${({ theme }) => theme.liteOrange};
`;

export const ButtonsWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const PanelButton = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 1;
  border-right-color: ${({ theme }) => theme.white};
  ${props => (props.first ? 'border-right-width: 1px' : '')};
`;

export const DatePickerText = styled.Text`
  color: ${({ theme }) => theme.grey};
  text-align: center;
  font-family: 'Nunito';
  font-size: 14px;
`;
