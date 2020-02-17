import React from 'react';
import PropTypes from 'prop-types';

import logoutIcon from '@images/logout.png';

import * as S from './styled';

const Logout = ({ onItemTap, title }) => (
  <S.LogoutWrapper onPress={() => onItemTap('logout')}>
    <S.LogoutIcon source={logoutIcon} />
    <S.LogoutText>
      {title}
    </S.LogoutText>
  </S.LogoutWrapper>
);

Logout.propTypes = {
  onItemTap: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default Logout;
