import React from 'react';
import PropTypes from 'prop-types';

import dateIcon from '@images/date.png';
import arrowIcon from '@images/arraw.png';

import * as S from './styled';

const Date = props => (
  <S.InlineDetailsWrapper>
    <S.Details>
      <S.IconWrapper>
        <S.Icon source={dateIcon} />
      </S.IconWrapper>
      <S.LinkWrapper onPress={() => props.openCalendar(props.data.starting)}>
        <S.InfoText>{props.data.starting}</S.InfoText>
        <S.Icon source={arrowIcon} />
      </S.LinkWrapper>
    </S.Details>
  </S.InlineDetailsWrapper>
);

Date.propTypes = {
  openCalendar: PropTypes.func.isRequired,
  data: PropTypes.shape({
    starting: PropTypes.string.isRequired,
  }).isRequired,
};

export default Date;
