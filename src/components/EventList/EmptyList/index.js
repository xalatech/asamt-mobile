import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const EmptyList = ({ message }) => (
  <S.Wrapper>
    <S.StyledText>
      {message}
    </S.StyledText>
  </S.Wrapper>
);

EmptyList.propTypes = {
  message: PropTypes.string.isRequired,
};

export default EmptyList;
