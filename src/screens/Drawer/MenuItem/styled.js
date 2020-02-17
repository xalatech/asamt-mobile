import styled from 'styled-components';
import { fontWeight } from '@components/core/styled';

export const DrawerText = styled.Text`
  text-align: left;
  color: black;
  ${fontWeight(400)}
  font-size: 13px;
`;

export const StyledTouchableOpacity = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(183, 193, 203, 0.2);
`;

export const IconItem = styled.Image`
  margin-right: 8px;
  height: 18px;
  width: 18px;
`;

export const IconArrow = styled.Image`
  margin-right: 8px;
`;

export const ItemWrapper = styled.View`
  flex-direction: row;
`;
