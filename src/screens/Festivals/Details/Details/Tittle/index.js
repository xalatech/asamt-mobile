import React from 'react';
import PropTypes from 'prop-types';
import ImageWithPlaceholder from '@components/core/ImageWithPlaceholder';

import notFoundImage from '@images/image-not-found.png';
// import favouriteIcon from '@images/save.png';
import shareIcon from '@images/share.png';

import * as S from './styled';

const ImagePlaceholderStyle = {
  width: '100%',
  height: '100%',
};

const Tittle = props => (
  <S.Wrapper>
    <S.TittleImageWrapper>
      <S.TittleImage>
        <ImageWithPlaceholder
          imgUrl={{ uri: encodeURI(props.data.coverImage || '') }}
          defaultImg={notFoundImage}
          style={ImagePlaceholderStyle}
        />
      </S.TittleImage>
      <S.Tools>
        <S.StyledTouchable onPress={props.shareEvent}>
          <S.ActionIcon source={shareIcon} />
          <S.ActionText>Del</S.ActionText>
        </S.StyledTouchable>
        {/*        {props.authenticated &&
        <S.StyledTouchable>
          <S.ActionIcon source={favouriteIcon} />
          <S.ActionText>Large</S.ActionText>
        </S.StyledTouchable>} */}
      </S.Tools>
    </S.TittleImageWrapper>

    <S.TittleWrapper>
      <S.Tittle>{props.data.title}</S.Tittle>
    </S.TittleWrapper>
  </S.Wrapper>
);

Tittle.propTypes = {
  shareEvent: PropTypes.func.isRequired,
  data: PropTypes.shape({
    coverImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  // authenticated: PropTypes.bool.isRequired,
};

export default Tittle;
