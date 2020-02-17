import React, { Component } from 'react';
import PropTypes from 'prop-types';

import theme from '../../../theme';
import * as S from './styled';

class ImageWithPlaceholder extends Component {
  state = {
    isLoading: true,
    isSuccess: true,
  };

  onLoadStart = () => {
    this.setState({ isLoading: true });
  }

  onLoadEnd = () => {
    this.setState({ isLoading: false });
  }

  onError = () => {
    this.setState({ isSuccess: false });
  }

  render() {
    const { style, imgUrl, defaultImg } = this.props;
    const { isSuccess, isLoading } = this.state;
    const source = (/^(http|https)/.test(imgUrl.uri) && isSuccess) ? imgUrl : defaultImg;

    return (
      <S.Wrapper style={style}>
        <S.Loader
          size="large"
          color={theme.primaryOrange}
          animating={isLoading}
        />
        <S.Image
          onLoadStart={this.onLoadStart}
          onLoadEnd={this.onLoadEnd}
          onError={this.onError}
          source={source}
        />
      </S.Wrapper>
    );
  }
}

ImageWithPlaceholder.defaultProps = {
  style: {},
};

ImageWithPlaceholder.propTypes = {
  style: PropTypes.any,
  imgUrl: PropTypes.any.isRequired,
  defaultImg: PropTypes.any.isRequired,
};

export default ImageWithPlaceholder;
