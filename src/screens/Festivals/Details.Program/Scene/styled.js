import styled from 'styled-components';
import { fontWeight } from '@components/core/styled';

export const Scene = styled.TouchableOpacity`
  position: relative;
  width: 48%;
  height: 170px;
  margin-bottom: 8px;
  border-radius: 5px;
`;

export const Overlay = styled.View`
  background-color: rgba(0,0,0,0.2);
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  border-radius: 5px;
  top: 0;
  z-index: 1;
`;

export const SceneName = styled.Text`
  color: ${({ theme }) => theme.white};
  font-size: 16px;
  text-align: center;
  ${fontWeight(700)}
`;

export const SceneWrapper = styled.View`
  width: 100%;
  height: 100%;
`;

export const SceneNameWrapper = styled.View`
  position: absolute;
  bottom: 15px;
  left: 0;
  width: 100%;
  z-index: 2;
`;

export const SceneImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;
