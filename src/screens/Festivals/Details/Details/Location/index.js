import React from 'react';
import PropTypes from 'prop-types';

import mapImg from '@images/mapForEvent.png';

import * as S from './styled';

const Location = ({ data, openMap }) => {
  if (!data.venue) {
    return null;
  }

  return (
    <S.LocationWrapper onPress={() => openMap(data)}>
      <S.Overlay />
      <S.MapImage source={mapImg} />
      <S.InfoWrapper>
        <S.Location>
          {data.venue.city}
        </S.Location>
        <S.Date>
          {data.starting}
        </S.Date>
      </S.InfoWrapper>
    </S.LocationWrapper>
  );
};

Location.propTypes = {
  openMap: PropTypes.func.isRequired,
  data: PropTypes.shape({
    venue: PropTypes.object.isRequired,
    lat: PropTypes.string,
    starting: PropTypes.string.isRequired,
    lon: PropTypes.string,
  }).isRequired,
};

export default Location;
