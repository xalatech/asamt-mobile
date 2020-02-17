import React from 'react';
import PropTypes from 'prop-types';

import arrow from '@images/arraw.png';
import * as S from './styled';

const Setting = props => (
  <S.Field>
    <S.FieldText>{props.text}</S.FieldText>
    <S.Arrow source={arrow} />
  </S.Field>
);

Setting.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Setting;
