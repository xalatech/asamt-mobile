import styled from 'styled-components';

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

export const Touchable = styled.TouchableOpacity`
  margin-bottom: 10px;
  margin-top: ${props => (props.isFirst ? '10px' : '0')};
  height: 165px;
`;

export const Overlay = styled.View`
  background-color: rgba(0,0,0,0.3);
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
`;
