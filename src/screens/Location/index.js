import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { PixelRatio } from 'react-native';

import GooglePlacesSearch from '@components/GooglePlacesSearch';
import apps from '../../apps';

import * as S from './styled';

const styles = {
  textInputContainer: {
    width: '100%',
    height: 45,
    backgroundColor: 'transparent',
    borderRightWidth: 1 / PixelRatio.get(),
    borderLeftWidth: 1 / PixelRatio.get(),
    borderBottomWidth: 1,
    borderTopWidth: 1 / PixelRatio.get(),
    paddingLeft: 20,
    borderRadius: 4,
    zIndex: 1,
  },
  description: {
    fontWeight: 'bold',
  },
  powered: {
    opacity: 0,
  },
};

class Location extends Component {
  static navigatorStyle = {
    navBarTextColor: '#FFFFFF',
  }

  goToInterests = () => {
    if (this.props.auth) {
      return this.props.navigator.resetTo({
        screen: 'StartInterests',
        title: 'Interesser',
      });
    } return apps.tabBasedGuest();
  };

  render() {
    return (
      <S.Container>
        <GooglePlacesSearch
          onPress={this.goToInterests}
          placeholder="Hvor skal du?"
          autoFocus={false}
          styles={styles}
        />
      </S.Container>
    );
  }
}

Location.navigatorStyle = {
  tabBarHidden: true,
};

Location.propTypes = {
  auth: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ auth }) => ({
  auth: auth.authenticated,
});

export default connect(mapStateToProps)(Location);
