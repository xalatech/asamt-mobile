import styled from 'styled-components';

export const InlineDetailsWrapper = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: rgba(183, 193, 203, 0.2);

`;

export const Details = styled.View`
  width: 95%;
  margin-right: auto;
  flex-direction: row;
  min-height: 47px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Icon = styled.Image`

`;

export const InfoText = styled.Text`
  font-size: 12px;
`;

export const IconWrapper = styled.View`
  max-width: 32px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const LinkWrapper = styled.TouchableOpacity`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 15px;
`;
