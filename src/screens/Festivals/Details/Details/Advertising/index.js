import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const Advertising = ({ data }) => {
  if (!data || !data.length) {
    return null;
  }

  return (
    <S.AdvertisingWrapper>
      <S.Banner
        resizeMode="cover"
        source={{ uri: encodeURI(data[0].bannerMobile || '') }}
      />
    </S.AdvertisingWrapper>
  );
};

Advertising.propTypes = {
  data: PropTypes.array,
};

Advertising.defaultProps = {
  data: [],
};

export default Advertising;
