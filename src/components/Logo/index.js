import React from 'react';
import PropTypes from 'prop-types';

import logo from '../../images/logo.png';
import { LogoImage, Container } from './styled';

const Logo = ({ intro }) => (
  <Container intro={intro} >
    <LogoImage resizeMode="contain" source={logo} />
  </Container>
);

Logo.propTypes = {
  intro: PropTypes.bool,
};

Logo.defaultProps = {
  intro: false,
};

export default Logo;
