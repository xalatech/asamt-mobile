import styled from 'styled-components';
import { fontWeight } from '@components/core/styled';

export const EventDetailsWrapper = styled.View`
  width: 75%;
`;

export const IconWrapper = styled.View`
`;

export const Date = styled.View`
  background: ${({ theme }) => theme.primaryBlue};
  border-radius: 5px;
  min-height: 22px;
  max-width: 80px; 
  padding: 0 10px;
  justify-content: center;
  margin-bottom: 8px;
`;

export const DateText = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.white};
  font-size: 12px;
`;

export const FestivalDate = Date.extend`
  max-width: 140px;
`;

export const InformationBottom = styled.View`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TextTittle = styled.Text`
  font-size: 20px;
  ${fontWeight(700)}
  color: ${({ theme }) => theme.white};
`;

export const TextPlace = styled.Text`
  font-size: 15px;
  ${fontWeight(700)}
  color: rgba(255, 255, 255, 0.8);
`;

export const EventImage = styled.Image`
  width: 30px;
  height: 34px;
`;
