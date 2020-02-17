import React from 'react';
import PropTypes from 'prop-types';

import placeIcon from '@images/place.png';
import arrowIcon from '@images/arraw.png';

import * as S from './styled';

const Location = props => (
  <S.InlineDetailsWrapper>
    <S.Details>
      <S.IconWrapper>
        <S.Icon source={placeIcon} />
      </S.IconWrapper>
      <S.LinkWrapper onPress={() => props.openMap}>
        <S.InfoText>{props.data.venue.city}</S.InfoText>
        <S.Icon source={arrowIcon} />
      </S.LinkWrapper>
    </S.Details>
  </S.InlineDetailsWrapper>
);

Location.propTypes = {
  openMap: PropTypes.func.isRequired,
  data: PropTypes.shape({
    venue: PropTypes.object.isRequired,
  }).isRequired,
};

export default Location;
