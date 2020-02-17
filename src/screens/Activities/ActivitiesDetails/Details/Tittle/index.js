import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import favouriteIcon from '@images/save.png';
import shareIcon from '@images/share.png';

import ImageWithPlaceholder from '@components/core/ImageWithPlaceholder';
import notFoundImage from '@images/image-not-found.png';
import * as S from './styled';

const ImagePlaceholderStyle = {
  height: 197,
  width: '100%',
};

class Tittle extends Component {
  state = {
    isFavourite: this.props.data.isFavourite,
  };

  handleFavouriteEvent = () => {
    if (this.state.isFavourite) {
      this.props.deleteEventFromFavourite();
    } else {
      this.props.addEventToFavourite();
    }
    this.setState({
      isFavourite: !this.state.isFavourite,
    });
  };

  render() {
    return (
      <S.Wrapper>
        <S.TittleImageWrapper>
          <ImageWithPlaceholder
            imgUrl={{ uri: this.props.data.coverImage || '' }}
            defaultImg={notFoundImage}
            style={ImagePlaceholderStyle}
          />
          <S.Tools>
            <S.StyledTouchable onPress={this.props.shareEvent}>
              <S.ActionIcon source={shareIcon} />
              <S.ActionText>Del </S.ActionText>
            </S.StyledTouchable>
            {/* {this.props.authenticated &&
            <S.StyledTouchable
              onPress={this.handleFavouriteEvent}
            >
              <S.ActionIcon source={favouriteIcon} />
              <S.ActionText>{this.state.isFavourite ? 'Fjerne' : 'Lagre'}</S.ActionText>
            </S.StyledTouchable>} */}
          </S.Tools>
        </S.TittleImageWrapper>
        <S.TittleWrapper>
          <S.Tittle>{this.props.data.title}</S.Tittle>
        </S.TittleWrapper>
      </S.Wrapper>
    );
  }
}


Tittle.propTypes = {
  shareEvent: PropTypes.func.isRequired,
  addEventToFavourite: PropTypes.func.isRequired,
  deleteEventFromFavourite: PropTypes.func.isRequired,
  data: PropTypes.shape({
    coverImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    isFavourite: PropTypes.bool.isRequired,
  }).isRequired,
  // authenticated: PropTypes.bool.isRequired,
};

export default Tittle;
