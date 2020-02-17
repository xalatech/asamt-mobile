import styled from 'styled-components';

export const NotificationWrapper = styled.View`
  min-height: 80px;
  border-radius: 5px;
  border-color: #E3467E;
  border-width: 1px;
  margin-bottom: 8px;
  flex-direction: row;
  margin-top: ${props => (props.first ? '8px' : '0')};
  overflow: hidden;
`;

export const ImageWrapper = styled.View`
  margin-right: 16px;
`;

export const TitleImage = styled.Image`
  flex: 1;
  width: 80px;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
`;

export const TextWrapper = styled.View`
  align-items: flex-start;
  justify-content: space-around;
  flex: 1;
`;

export const TitleText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #000;
  width: 95%;
  margin-right: auto;
`;

export const DateText = styled.Text`
  color: #AFAFAF;
  font-size: 12px;
`;
