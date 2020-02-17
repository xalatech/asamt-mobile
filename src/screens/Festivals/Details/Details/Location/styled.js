import styled from 'styled-components';
import { fontWeight } from '@components/core/styled';

export const LocationWrapper = styled.TouchableOpacity`
  width: 90%;
  height: 140px;
  border-radius: 5px;
  position: relative;
  justify-content: center;
  margin: 20px auto 0;
`;

export const MapImage = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 5px;
`;

export const InfoWrapper = styled.View`
  height: 50%;
  justify-content: space-between;
  z-index: 3;
  width: 75%;
  margin: 0 10% 0 auto;
`;

export const Location = styled.Text`
  font-size: 14px;
  ${fontWeight(700)}
  color: white;
`;

export const Date = styled.Text`
  font-size: 14px;
  ${fontWeight(700)}
  color: white;
`;

export const Overlay = styled.View`
  background-color: rgba(0,0,0,0.2);
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  border-radius: 5px;
`;
