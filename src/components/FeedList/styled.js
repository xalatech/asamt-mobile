import styled from 'styled-components';

export const Wrapper = styled.View`
  width: ${props => (props.controls ? '95%' : '90%')};
  margin: 0 auto;
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
`;
