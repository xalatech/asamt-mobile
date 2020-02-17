import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Keyboard, Platform, LayoutAnimation } from 'react-native';

import Logo from '@components/Logo';
import theme from '../../theme';
import header from '../../images/background.png';

import * as S from './styled';

import SignUp from './SignUp';
import SignIn from './SignIn';

const platform = Platform.OS;
const keyboardShowEvent = platform === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow';
const keyboardHideEvent = platform === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide';

class AuthLogin extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    setShouldRedirect: PropTypes.bool.isRequired,
    access: PropTypes.bool.isRequired,
  }

  static navigatorStyle = {
    navBarButtonColor: theme.primaryBlue,
    navBarBackgroundColor: theme.liteOrange,
    topBarElevationShadowEnabled: false,
    navBarNoBorder: true,
    statusBarColor: theme.liteOrange,
  };

  state = {
    isSignup: true,
    keyboardVisible: false,
  };
  componentWillMount() {
    this.keyboardDidShowListener = Keyboard.addListener(keyboardShowEvent, this.keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener(keyboardHideEvent, this.keyboardDidHide);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.setShouldRedirect && !this.props.setShouldRedirect) {
      setTimeout(this.goToInterests, 100);
    }
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }
  goToInterests = () => {
    if (this.props.access) {
      this.props.navigator.resetTo({
        screen: 'StartInterests',
        title: 'Interests',
      });
    } else {
      this.props.navigator.resetTo({
        screen: 'Location',
        title: 'Velg plassering',
      });
    }
  };

  switchToSignIn = () => {
    this.setState({ isSignup: false });
  };

  switchToSignUp = () => {
    this.setState({ isSignup: true });
  };

  keyboardDidShow = () => {
    if (platform === 'android') {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    }
    this.setState({ keyboardVisible: true });
  };

  keyboardDidHide = () => {
    if (platform === 'android') {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    }
    this.setState({ keyboardVisible: false });
  };

  facebookLogin = () => {
    this.props.navigator.push({
      screen: 'Facebook',
      title: 'Facebook',
    });
  }

  googleLogin = () => {
    this.props.navigator.push({
      screen: 'Google',
      title: 'Google',
    });
  }

  render() {
    const { keyboardVisible } = this.state;
    return (
      <S.BackgroundView keyboardVerticalOffset={30} behavior={platform === 'ios' ? 'padding' : null}>
        {!keyboardVisible &&
          <S.HeaderContainer>
            <S.HeaderImage resizeMode="cover" source={header} />
            <S.LogoWrapper>
              <Logo />
              <S.Title>Asamt</S.Title>
            </S.LogoWrapper>
          </S.HeaderContainer>
        }
        <S.ButtonContainer keyboardVisible={keyboardVisible}>
          <S.Touch onPress={this.switchToSignUp} >
            <S.ButtonText active={this.state.isSignup} keyboardVisible={keyboardVisible}>
            Registrer deg
            </S.ButtonText>
          </S.Touch>
          <S.Touch onPress={this.switchToSignIn} >
            <S.ButtonText active={!this.state.isSignup} keyboardVisible={keyboardVisible}>
            Logg inn
            </S.ButtonText>
          </S.Touch>
        </S.ButtonContainer>
        {this.state.isSignup ?
          <SignUp
            loading={this.props.loading}
            facebookLogin={this.facebookLogin}
            googleLogin={this.googleLogin}
          /> :
          <SignIn
            loading={this.props.loading}
            facebookLogin={this.facebookLogin}
            googleLogin={this.googleLogin}
          />
        }
      </S.BackgroundView>
    );
  }
}

const mapStateToProps = ({ auth, location }) => ({
  error: auth.signupError.message,
  loading: auth.loading,
  setShouldRedirect: auth.setShouldRedirect,
  access: location.locationAccess,
  checkInterests: auth.haveInterests,
});

export default connect(mapStateToProps, null)(AuthLogin);
