import { NativeEventsReceiver, Navigation } from 'react-native-navigation';
import { Platform } from 'react-native';
import bugsnag from '@services/bugsnag';

import start from './src/app';

(async () => {
  try {
    if (Platform.OS === 'ios') {
      await start();
    } else {
      const appLaunched = await Navigation.isAppLaunched();

      if (appLaunched) {
        await start();
      }

      new NativeEventsReceiver().appLaunched(start);
    }
  } catch (error) {
    bugsnag.notify(error);
  }
})();
