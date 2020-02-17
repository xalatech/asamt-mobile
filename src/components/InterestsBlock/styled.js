import styled from 'styled-components';

export const Wrapper = styled.View`
  width: 100%;
  margin: 16px auto 0;
  flex: 1;
`;

export const InterestsWrapper = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1;
`;

export const StyledScrollView = styled.ScrollView`
  display: flex;
`;

export const ScrollViewWrapper = styled.View`
  flex-grow: 1;
  width: 100%;
  flex: 1;
`;

export const HintText = styled.Text`
  margin-bottom: 10px;
  font-size: 12px;
`;

export const TextBtn = styled.Text`
  color: ${({ theme }) => theme.white};
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;

export const Loader = styled.ActivityIndicator.attrs({
  color: ({ theme }) => theme.primaryOrange,
  size: 'large',
})`

`;
