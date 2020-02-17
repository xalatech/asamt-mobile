import styled from 'styled-components';

export const Input = styled.TextInput`
  border: 1px #DCDCDC;
  flex: 1;
  height: 51px;
  border-right-width: 0;
  padding: 0 22px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 0;
  border-top-left-radius: 5px;
  border-top-right-radius: 0;
`;

export const SearchButton = styled.TouchableOpacity`
  width: 62px;
  height: 51px;
  background: #5FC8D7;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 0;
  border-top-right-radius: 5px;
  align-items: center;
  justify-content: center;
`;

export const SearchWrapper = styled.View`
  display: flex;
  flex-direction: row;
  width: 90%;
  margin: 20px auto 0;
`;

export const Wrapper = styled.View`
  flex: 1;
  background-color: white;

`;

export const SearchIcon = styled.Image`
  width: 25px;
  height: 25px;
`;
