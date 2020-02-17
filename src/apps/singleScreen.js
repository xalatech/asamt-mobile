import { Navigation } from 'react-native-navigation';

import { appStyle } from './styles';

export default () => Navigation.startSingleScreenApp({
  screen: {
    screen: 'Intro',
    title: 'Intro',
  },
  appStyle: { ...appStyle },
});
