import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { requestGoogleLogin } from '@redux/modules/auth';
import Loader from '../../SocialLoader';
import * as S from './styled';

const USER_AGENT = 'Mozilla/5.0 (Linux; Android 4.1.1; Galaxy Nexus Build/JRO03C) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Mobile Safari/535.19';

class Google extends Component {
  handleURL = (event) => {
    try {
      if (!event.loading) {
        const accessToken = event.url.split('#')[1].split('=')[1].split('&')[0];
        console.log(accessToken);
        this.props.requestGoogleLogin(accessToken);
      }
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { googleAppId } = this.props;
    const uri = [
      'https://accounts.google.com/o/oauth2/v2/auth',
      '?scope=profile+email',
      '&response_type=token',
      '&redirect_uri=https://asamt.azurewebsites.net/success',
      `&client_id=${googleAppId}`,
    ].join('');
    return (
      <S.View
        source={{ uri }}
        onNavigationStateChange={this.handleURL}
        javaScriptEnabled
        domStorageEnabled
        userAgent={USER_AGENT}
        startInLoadingState
        renderLoading={() => (<Loader />)}
      />
    );
  }
}

Google.propTypes = {
  requestGoogleLogin: PropTypes.func.isRequired,
  googleAppId: PropTypes.string.isRequired,
};

const mapStateToProps = ({ config }) => ({
  googleAppId: config.googleAppId,
});

const mapDispatchToProps = {
  requestGoogleLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(Google);
