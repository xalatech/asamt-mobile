import styled from 'styled-components';
import { fontWeight } from '@components/core/styled';

export const ArtistImage = styled.Image`
  width: 80px;
  height: 80px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

export const ArtistImageContainer = styled.View`
  height: 80px;
  width: 80px;
  align-self: flex-start;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  overflow: hidden;
`;

export const ArtistInfo = styled.TouchableOpacity`
  height: 80px;
  width: 90%;
  flex-direction: row;
  border-width: 0.5;
  border-color: #E2E2E5;
  border-radius: 5px;
  align-self: center;
  margin-bottom: ${props => (props.isLast ? '14px' : '5px')};
  margin-top: ${props => (props.isFirst ? '14px' : '0')};
`;

export const ArtistTitle = styled.Text`
  color: #000;
  line-height: 19px;
  font-size: 16px;
  ${fontWeight(700)}
  margin-left: ${props => (props.isSchedule ? '10%' : 0)};
  align-self: ${props => (props.isSchedule ? 'center' : 'auto')};
`;

export const Time = styled.View`
  background: ${({ theme }) => theme.primaryOrange};
  border-radius: 5px;
  height: 20;
  width: 50;
  justify-content: center;
  position: absolute;
  right: 10;
  top: 10;
`;

export const AdditionalTime = styled(Time)`
  top: 34;
  background: ${({ theme }) => theme.primaryBlue};
`;

export const TimeText = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.white};
  font-size: 11px;
`;

export const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 60%;
  height: 100%;
  padding: 0 4%;
`;

export const LocationText = styled.Text`
  margin-left: 5px;
  font-size: 12px;
  color: #AFAFAF;
  ${fontWeight(400)}
`;

export const LocationIcon = styled.Image`
  width: 13;
  height: 17;
`;

export const LocationWrapper = styled.View`
  margin-top: 4;
  display: flex;
  flex-direction: row;
`;
