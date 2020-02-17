import styled from 'styled-components';
import { fontWeight } from '@components/core/styled';

export const TittleImage = styled.View`
  width: 100%;
  height: 190px;
`;

export const TittleImageWrapper = styled.View`
  position: relative;
`;

export const Tools = styled.View`
  background-color: rgba(0,0,0,0.2);
  height: 36px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const ActionIcon = styled.Image`
  margin-right: 15px;
`;
export const ActionText = styled.Text`
  color: white;
  ${fontWeight(400)}
  margin: auto 0;
`;

export const StyledTouchable = styled.TouchableOpacity`
  flex-direction: row;
  display: flex;
  align-items: center;
`;

export const Tittle = styled.Text`
  ${fontWeight(400)}
  font-size: 20px;
  text-align: center;
  color: black;
`;

export const TittleWrapper = styled.View`
  width: 90%;
  margin: 16px auto;
`;

export const Wrapper = styled.View`

`;
