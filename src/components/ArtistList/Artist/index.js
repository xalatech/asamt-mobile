import React from 'react';
import PropTypes from 'prop-types';
import location from '@images/location.png';

import * as S from './styled';

const Artist = props => (
  <S.ArtistInfo
    isFirst={props.index === 0}
    isLast={props.index === props.data.length - 1}
  >
    <S.ArtistImageContainer>
      <S.ArtistImage source={{ uri: encodeURI(props.item.artistImage || '') }} resize="contain" />
    </S.ArtistImageContainer>
    <S.Wrapper>
      <S.ArtistTitle>{props.item.artistName}</S.ArtistTitle>
      {props.type === 'Artists' ?
        <S.LocationWrapper>
          <S.LocationIcon source={location} />
          <S.LocationText>{props.item.concertPlace}</S.LocationText>
        </S.LocationWrapper>
          : null
        }
    </S.Wrapper>
    <S.Time><S.TimeText>{props.item.concertDay}</S.TimeText></S.Time>
    <S.AdditionalTime><S.TimeText>{props.item.concertHours}</S.TimeText></S.AdditionalTime>
  </S.ArtistInfo>
);

Artist.propTypes = {
  index: PropTypes.number.isRequired,
  data: PropTypes.any.isRequired,
  type: PropTypes.string.isRequired,
  item: PropTypes.object.isRequired,
};

export default Artist;
