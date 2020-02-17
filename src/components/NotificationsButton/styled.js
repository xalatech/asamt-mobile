import styled from 'styled-components';

export const Wrapper = styled.TouchableOpacity`
  position: relative;
  width: 30px;
  flex: 1;
`;

export const PinNotification = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #E3467E;
  position: absolute;
  top: 0;
  left: 0;
`;

export const ValueUnreadNotifications = styled.Text`
  color: white;
  font-size: 9px;
`;

export const NotificationIcon = styled.Image`
  width: 20px;
  height: 20px;
`;
