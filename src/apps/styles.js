import { Platform } from 'react-native';

import theme from '../theme';

export const tabsStyle = {
  tabBarButtonColor: theme.tabBarButtonColor,
  tabBarSelectedButtonColor: theme.tabBarSelectedButtonColor,
  tabBarBackgroundColor: theme.tabBarBackgroundColor,
  tabBarLabelColor: theme.tabBarButtonColor,
  tabBarSelectedLabelColor: theme.white,
  tabBarTranslucent: false,
  initialTabIndex: 1,
};

export const appStyle = {
  orientation: 'portrait',
  navBarBackgroundColor: theme.navBar,
  navBarTextColor: 'white',
  navBarButtonColor: 'white',
  navBarTitleTextCentered: true,
  statusBarColor: theme.statusBar,
  initialTabIndex: 1,
  forceTitlesDisplay: true,
  screenBackgroundColor: 'white',
  tabBarBackgroundColor: theme.tabBarBackgroundColor,
  ...(Platform.OS === 'android' ? { ...tabsStyle } : {}),
};

export const navigatorButtons = {
  rightButtons: [
    {
      id: 'customSideMenu',
      icon: require('../images/navbar/hamburger.png'),
      systemItem: 'compose',
    },
  ],
  leftButtons: [
    {
      id: 'Notifications',
      icon: require('../images/navbar/notifications.png'),
    },
  ],
};

export const guestNavigationButtons = {
  rightButtons: [
    {
      id: 'customSideMenu',
      icon: require('../images/navbar/hamburger.png'),
      systemItem: 'compose',
    },
  ],

};

export const drawerStyles = {
  right: {
    screen: 'Drawer',
  },
  style: {
    drawerShadow: false,
    contentOverlayColor: 'rgba(0,0,0,0.25)',
  },
  animationType: 'slide',
};
