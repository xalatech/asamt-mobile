import styled from 'styled-components';

export const Wrapper = styled.View`
  width: 100%;
  margin: 16px auto 0;
  flex: 1;
`;

export const CategoriesWrapper = styled.View`
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
  padding: 0 10px;
`;

export const HintText = styled.Text`
  margin-bottom: 10px;
  font-size: 12px;
`;

export const ShowEventsBtn = styled.TouchableOpacity`
  border-radius: 5px;
  height: 50px;
  width: 86%;
  background-color: ${({ theme }) => theme.primaryBlue};
  justify-content: center;
`;

export const TextBtn = styled.Text`
  color: ${({ theme }) => theme.white};
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;

export const ShowEventsBtnWrapper = styled.View`
  width: 100%;
  height: 73px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-bottom-width: 0;
  shadow-color: #000;
  shadow-offset: 0px 1px;
  shadow-opacity: 0.3;
  shadow-radius: 2;
`;

export const BtnContainer = styled.View`
  width: 86%;
`;
