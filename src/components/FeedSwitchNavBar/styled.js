import { Platform } from 'react-native';
import styled from 'styled-components';

export const Wrapper = styled.View`
  width: 220px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: ${({ theme }) => theme.primaryOrange};
  height: ${Platform.OS === 'ios' ? 40 : 56};
`;

export const TouchableTabBar = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  flex: 1;
  justify-content: center;
`;

export const TouchableText = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.white};
  font-size: 20px;
  margin-right: 5px;
`;

export const ModalWrapper = styled.View`
  width: 60%;
  height: 100px;
  background-color: white;
  margin: auto;
  z-index: 2;
  border-radius: 8px;
`;

export const StyledModal = styled.Modal`
  align-items: center;
  justify-content: center;
`;

export const Overlay = styled.View`
  background-color: rgba(0,0,0,0.4);
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 56;
  z-index: 1;
`;

export const TouchableItemChoose = styled.TouchableOpacity`
  flex-direction: row;
  flex: 1;
  height: 50px;
  align-items: center;
  justify-content: center;
`;

export const ItemText = styled.Text`
  color: black;
  text-align: center;
  font-size: 16px;
`;

export const ArrowDownWrapper = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin-top: 3px;
`;

export const ArrowDown = styled.Image`
  transform: rotate(${props => (props.rotate ? '180deg' : '0deg')});
`;
