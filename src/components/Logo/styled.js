import styled from 'styled-components';

export const LogoImage = styled.Image`
  height: 100%;
  width: 100%;
`;

export const Container = styled.View`
  height: ${props => (props.intro ? 70 : 50)};
  width: ${props => (props.intro ? 70 : 50)};
  position: relative;
  margin-top: 0;
`;
