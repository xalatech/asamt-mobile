import { Navigation } from 'react-native-navigation';

import {
  appStyle,
  tabsStyle,
  guestNavigationButtons,
  drawerStyles,
} from './styles';

export default () => Navigation.startTabBasedApp({
  tabs: [
    {
      screen: 'CategoriesTab',
      title: 'Kategorier',
      label: 'Kategorier',
      icon: require('../images/tabs/selected/categories.png'),
      navigatorButtons: guestNavigationButtons,
    },
    {
      screen: 'Feed',
      title: 'Alle',
      label: 'Alle',
      icon: require('../images/tabs/selected/feed.png'),
      navigatorButtons: guestNavigationButtons,
    },
    {
      screen: 'Guest',
      title: 'Populært',
      label: 'Populært',
      icon: require('../images/tabs/selected/trending.png'),
      navigatorButtons: guestNavigationButtons,
    },
    {
      screen: 'Guest',
      title: 'Forslag',
      label: 'Forslag',
      icon: require('../images/tabs/selected/suggestions.png'),
      navigatorButtons: guestNavigationButtons,
    },
    {
      screen: 'Guest',
      title: 'Lagret',
      label: 'Lagret',
      icon: require('../images/tabs/selected/saved.png'),
      navigatorButtons: guestNavigationButtons,
    },
  ],
  animationType: 'fade',
  drawer: { ...drawerStyles },
  appStyle: { ...appStyle },
  tabsStyle: { ...tabsStyle },
});
