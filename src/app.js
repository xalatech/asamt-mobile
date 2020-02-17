import moment from 'moment';
import 'moment/locale/nb';
import { INITIAL_STATE as authInitialState } from '@redux/modules/auth';
import { initialState as locationInitialState } from '@redux/modules/location';
import TokenStorage from '@services/storage/token';
import UserStorage from '@services/storage/user';
import http from '@services/http';
import LocationStorage from '@services/storage/location';
import './configs/ReactotronConfig';
import registerScreens from './screens';
import CombinedProvider from './CombinedProvider';
import configureStore from './redux/configureStore';

import apps from './apps';

moment.locale('nb');

export default async () => {
  const [token, user, location, ids] = await Promise.all([
    TokenStorage.get(),
    UserStorage.get(),
    LocationStorage.get(),
    http.get('/Settings/AppConfig'),
  ]);

  const authenticated = !!(token && user);
  const persistedState = {
    auth: {
      ...authInitialState,
      authenticated,
      token: token || '',
      user: user || {},
    },
    location: {
      ...locationInitialState,
      location: location || '',
      coords: (location && location.geometry && location.geometry.location) || '',
    },
    config: {
      facebookAppId: ids.data.facebookAuthAppId,
      googleAppId: ids.data.googleAuthAppId,
    },
  };
  const store = configureStore(persistedState);
  registerScreens(store, CombinedProvider);
  if (!authenticated) {
    return apps.singleScreen();
  }

  return apps.tabBased();
};
