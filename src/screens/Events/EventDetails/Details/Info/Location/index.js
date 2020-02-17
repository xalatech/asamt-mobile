import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const Location = props => (
  (props.data.venue ?
    <S.InlineDetailsWrapper>
      <S.Details>
        <S.IconWrapper>
          <S.Icon source={require('../../../../../../images/placeIcon.png')} />
        </S.IconWrapper>
        <S.LinkWrapper onPress={() => props.openMap(props.data.latitude, props.data.longitude)}>
          <S.InfoText>{props.data.venue.city}, {props.data.venue.country}</S.InfoText>
          <S.Icon source={require('../../../../../../images/arraw.png')} />
        </S.LinkWrapper>
      </S.Details>
    </S.InlineDetailsWrapper> :
    null
  )
);

Location.propTypes = {
  openMap: PropTypes.func.isRequired,
  data: PropTypes.shape({
    latitude: PropTypes.string.isRequired,
    longitude: PropTypes.string.isRequired,
    venue: PropTypes.PropTypes.shape({
      city: PropTypes.string,
      country: PropTypes.string,
    }),
  }).isRequired,
};


export default Location;
