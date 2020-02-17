import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Keyboard, Platform, LayoutAnimation } from 'react-native';

// import { loadTopFestival } from '@redux/modules/festival';
import { requestAccessDenied, geolocation } from '@redux/modules/location';
import { requestCheckAuthentication } from '@redux/modules/auth';

import apps from '@apps';
import { handleDeepLinks, addDebounce } from '@helpers';
import logo from '@images/intro/intro.png';
import DismissKeyboardHOC from '@components/DismissKeyboardHOC';
import Button from '@components/core/Button';

import * as S from './styled';

const DismissKeyboardView = DismissKeyboardHOC(S.BackgroundView);
const platform = Platform.OS;
const keyboardShowEvent = platform === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow';
const keyboardHideEvent = platform === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide';

class Intro extends Component {
  static navigatorStyle = {
    navBarHidden: true,
  };

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  state = {
    keyboardVisible: false,
  };

  componentWillMount() {
    this.keyboardDidShowListener = Keyboard.addListener(keyboardShowEvent, this.keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener(keyboardHideEvent, this.keyboardDidHide);
  }

  componentDidMount() {
    // this.props.loadTopFestival();
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  onNavigatorEvent(event) {
    handleDeepLinks(event, this.props.navigator);
  }

  onLoginPress = addDebounce(() => {
    Keyboard.dismiss();
    this.props.navigator.push({
      screen: 'AuthLogin',
      title: '',
    });
  });

  onSkip = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      this.props.geolocation({ coords: position.coords });
      apps.tabBasedGuest();
    }, () => {
      this.props.navigator.push({
        screen: 'Location',
        title: 'Velg plassering',
      });
      this.props.requestAccessDenied();
    });
  };

  /*  goToFestival = addDebounce((item) => {
    this.props.navigator.push({
      screen: 'Festival.Details',
      passProps: { festivalId: item.id },
      title: item.title,
      animationType: 'slide-horizontal',
    });
  }); */

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

  render() {
    // const { festival, loading } = this.props;
    const { keyboardVisible } = this.state;

    return (
      <DismissKeyboardView>
        <S.ContainerView>
          {!keyboardVisible &&
            <S.HeaderWrapper>
              <S.Header>
                <S.Logo source={logo} />
              </S.Header>
            </S.HeaderWrapper>
          }
          <S.DescriptionView>
            <S.Subtitle>Oppdag. Utforsk. Opplev.</S.Subtitle>
            <S.Description>Finn arrangementer og aktiviteter nær deg</S.Description>
          </S.DescriptionView>
        </S.ContainerView>
        <S.ButtonContainer>
          {/* <S.HintButton>
            <S.HintText>?</S.HintText>
          </S.HintButton> */}
          {/* {loading && <S.Loader /> }
          {festival && !loading ?
            <S.ButtonWrapper>
              <Button onPress={() => this.goToFestival(festival)}
                      title="Månefestivalen"
                      color="#25C293" />
            </S.ButtonWrapper> :
            null
          } */}
          <S.ButtonWrapper>
            <Button onPress={this.onLoginPress} title="Logg inn" />
          </S.ButtonWrapper>
          <S.ButtonWrapper>
            <Button onPress={this.onSkip} title="Hopp over" color="transparent" />
          </S.ButtonWrapper>
        </S.ButtonContainer>
      </DismissKeyboardView>
    );
  }
}

Intro.propTypes = {
  // loadTopFestival: PropTypes.func.isRequired,
  // loading: PropTypes.bool.isRequired,
  // festival: PropTypes.object.isRequired,
  requestAccessDenied: PropTypes.func.isRequired,
  geolocation: PropTypes.func.isRequired,
};

const mapStateToProps = ({ auth }) => ({
  // festival: festival.topFestival,
  // loading: festival.isLoading,
  auth,
});

const mapDispatchToProps = {
  // loadTopFestival,
  requestAccessDenied,
  requestCheckAuthentication,
  geolocation,
};

export default connect(mapStateToProps, mapDispatchToProps)(Intro);
