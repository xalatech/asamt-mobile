import { Navigation } from 'react-native-navigation';

import {
  appStyle,
  tabsStyle,
  navigatorButtons,
  drawerStyles,
} from './styles';

const categoriesIcon = require('../images/tabs/selected/categories.png');

export default () => Navigation.startTabBasedApp({
  tabs: [
    {
      screen: 'CategoriesTab',
      title: 'Kategorier',
      label: 'Kategorier',
      icon: categoriesIcon,
      selectedIcon: categoriesIcon,
      navigatorButtons,
    },
    {
      screen: 'Feed',
      title: 'Alle',
      label: 'Alle',
      icon: require('../images/tabs/selected/feed.png'),
      selectedIcon: require('../images/tabs/selected/feed.png'),
      navigatorButtons,
    },
    {
      screen: 'Trending',
      title: 'Populært',
      label: 'Populært',
      icon: require('../images/tabs/selected/trending.png'),
      navigatorButtons,
    },
    {
      screen: 'Suggestions',
      title: 'Forslag',
      label: 'Forslag',
      icon: require('../images/tabs/selected/suggestions.png'),
      navigatorButtons,
    },
    {
      screen: 'Saved',
      title: 'Lagret',
      label: 'Lagret',
      icon: require('../images/tabs/selected/saved.png'),
      navigatorButtons,
    },
  ],
  animationType: 'fade',
  drawer: { ...drawerStyles },
  appStyle: { ...appStyle },
  tabsStyle: { ...tabsStyle },
});
