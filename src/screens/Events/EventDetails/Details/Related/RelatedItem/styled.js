import styled from 'styled-components';

export const ItemWrapper = styled.View`
  width: 280px;
  height: 180px;
  border-radius: 4px;
  margin-right: ${props => (props.last ? '0' : '8px')};
`;

export const Touchable = styled.TouchableOpacity`
  margin-bottom: 10px;
  height: 165px;
`;

export const Overlay = styled.View`
  background-color: rgba(0,0,0,0.2);
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
`;

export const EventTittleImage = styled.Image`
  width: 100%;
  height: 100%;
`;

export const EventFooter = styled.View`
  width: 90%;
  position: absolute;
  left: 5%;
  bottom: 12px;
  z-index: 2;
`;

export const EventInfo = styled.View`
  position: relative;
  border-radius: 7px;
  overflow: hidden;
`;
