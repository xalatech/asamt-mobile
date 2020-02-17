import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { requestFacebookLogin } from '@redux/modules/auth';
import Loader from '../../SocialLoader';

import * as S from './styled';

class Facebook extends Component {
  handleURL = (event) => {
    try {
      if (!event.loading) {
        const accessDenied = event.url.match(/access_denied/i);
        const accessToken = event.url.split('#')[1].split('=')[1].split('&')[0];
        if (accessDenied) {
          this.props.navigator.pop();
        } else {
          this.props.requestFacebookLogin(accessToken);
        }
      }
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { facebookAppId } = this.props;
    const uri = [
      'https://www.facebook.com/v3.1/dialog/oauth',
      `?client_id=${facebookAppId}`,
      '&redirect_uri=https://asamt.azurewebsites.net/success',
      '&response_type=token',
    ].join('');
    return (
      <S.View
        source={{ uri }}
        onNavigationStateChange={this.handleURL}
        javaScriptEnabled
        domStorageEnabled
        startInLoadingState
        renderLoading={() => (<Loader />)}
      />
    );
  }
}

Facebook.propTypes = {
  requestFacebookLogin: PropTypes.func.isRequired,
  facebookAppId: PropTypes.string.isRequired,
};

const mapStateToProps = ({ config }) => ({
  facebookAppId: config.facebookAppId,
});

const mapDispatchToProps = {
  requestFacebookLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(Facebook);
