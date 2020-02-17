import React from 'react';
import PropTypes from 'prop-types';

import dateIcon from '@images/dateIcon.png';

import * as S from './styled';

const Date = props => (
  <S.InlineDetailsWrapper>
    <S.Details>
      <S.IconWrapper>
        <S.Icon source={dateIcon} />
      </S.IconWrapper>
      <S.LinkWrapper>
        <S.InfoText>{props.data.startingDate}</S.InfoText>
        <S.InfoText>{props.data.startingTime}</S.InfoText>
      </S.LinkWrapper>
    </S.Details>
  </S.InlineDetailsWrapper>
);

Date.propTypes = {
  data: PropTypes.shape({
    startingDate: PropTypes.string.isRequired,
    startingTime: PropTypes.string.isRequired,
  }).isRequired,
};

export default Date;
