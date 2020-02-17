import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import { Platform, Linking } from 'react-native';
import PropTypes from 'prop-types';

import { requestLogout } from '@redux/modules/auth';
import { requestChangeType } from '@redux/modules/feedSwitchNavBar';
import apps from '@apps';
import aboutUsIcon from '@images/aboutUs.png';
import * as S from './styled';
import MenuItem from './MenuItem';
import Logout from './Logout';

import { items, itemsGuest } from './config';

const feedback = {
  url: 'http://asamt.no/feedback',
  icon: aboutUsIcon,
  screen: 'Feedback',
  tittle: 'Feedback',
};

const aboutUs = {
  url: 'http://asamt.no/about',
  icon: aboutUsIcon,
  screen: 'Om Asamt',
  tittle: 'Om Asamt',
};

const Events = {
  icon: aboutUsIcon,
  screen: '',
  tittle: 'Arrangementer',
};

// const Festivals = {
//   icon: aboutUsIcon,
//   screen: '',
//   tittle: 'Festivaler',
// };

const openUrl = url => Linking.openURL(url);

const getButtonsForPlatform = () => {
  let navigatorButtons;
  if (Platform.OS === 'ios') {
    navigatorButtons = {
      leftButtons: [
        {
          id: 'cancel',
          title: 'Cancel',
          systemItem: 'cancel',
        },
      ],
    };
  } else if (Platform.OS === 'android') {
    navigatorButtons = {
      leftButtons: [
        {
          id: 'back',
          title: 'Back',
          systemItem: 'back',
        },
      ],
    };
  }
  return navigatorButtons;
};

const avatar = (fName = '', lName = '') => `${fName.charAt(0)}${lName.charAt(0)}`.toUpperCase();

class Drawer extends Component {
  goToScreen = (screenName) => {
    if (screenName === 'logout') {
      apps.singleScreen();
    } else {
      Navigation.showModal({
        title: screenName,
        screen: screenName,
        animationType: 'slide-up',
        navigatorButtons: getButtonsForPlatform(),
        passProps: {
          festivalId: 'b76e1ba0-e41c-4e12-abed-4f768040a582',
        },
      });
      // this.props.navigator.handleDeepLink({ link: screenName });
    }
    this.toggleDrawer();
  };

  logOut = () => {
    this.props.requestLogout();
    // await start();
    apps.singleScreen();
  };

  logIn = () => {
    apps.singleScreen();
    // await start();
  };

  toggleDrawer() {
    this.props.navigator.toggleDrawer({
      side: 'right',
      to: 'closed',
      animated: true,
    });
  }

  goToMainScreen = (type) => {
    this.toggleDrawer();
    this.props.requestChangeType(type);
    this.props.navigator.handleDeepLink({ link: 'MainScreen' });
  };

  render() {
    const { authenticated } = this.props;
    const { user } = this.props;
    const menuItems = authenticated ? items : itemsGuest;

    return (
      <S.Drawer>
        <S.DrawerTop>
          <S.ProfileWrapper>
            <S.AvatarWrapper>
              {user.avatarUrl ? <S.Avatar source={{ uri: user.avatarUrl }} /> :
              <S.AvatarText>
                {avatar(user.firstName, user.lastName)}
              </S.AvatarText>
              }
            </S.AvatarWrapper>
            <S.UserName>
              {user.firstName ? `${user.firstName} ${user.lastName}` : 'Gjest'}
            </S.UserName>
          </S.ProfileWrapper>
          <S.ItemsWrapper>
            {menuItems.map(item => (
              <MenuItem
                key={item.tittle}
                item={item}
                onItemTap={this.goToScreen}
              />
            ))}
            <MenuItem
              item={feedback}
              onItemTap={() => openUrl(feedback.url)}
            />
            <MenuItem
              item={aboutUs}
              onItemTap={() => openUrl(aboutUs.url)}
            />
            <MenuItem
              item={Events}
              onItemTap={() => this.goToMainScreen('Events')}
            />
            {/* <MenuItem
              item={Festivals}
              onItemTap={() => this.goToMainScreen('Festivals')}
            /> */}
          </S.ItemsWrapper>
        </S.DrawerTop>
        {authenticated ?
          <Logout title="Logg ut" onItemTap={this.logOut} />
          : <Logout title="Logg inn" onItemTap={this.logIn} />
        }
      </S.Drawer>
    );
  }
}

Drawer.propTypes = {
  user: PropTypes.any.isRequired,
  authenticated: PropTypes.bool.isRequired,
  requestLogout: PropTypes.func.isRequired,
  requestChangeType: PropTypes.func.isRequired,
};

const mapStateToProps = ({ auth: { user, authenticated } }) => ({
  user,
  authenticated,
});

const mapDispatchToProps = {
  requestLogout,
  requestChangeType,
};

export default connect(mapStateToProps, mapDispatchToProps)(Drawer);
