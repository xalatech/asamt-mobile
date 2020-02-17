import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

import TokenStorage from '@services/storage/token';
import UserStorage from '@services/storage/user';
import { setShouldRedirectToLogin } from '@redux/modules/auth';

import rootReducer from './reducers';
import rootSaga from './sagas';

const authChecker = () => next => async (action) => {
  try {
    const token = await TokenStorage.get();
    const user = await UserStorage.get();
    const { payload } = action;
    if (token && user && payload && payload.response && payload.response.status === 401) {
      return next(setShouldRedirectToLogin(true));
    }
    return next(action);
  } catch (err) {
    console.log(err);
    return false;
  }
};

let createReduxStore = createStore;
const sagaMiddleware = createSagaMiddleware();

const middleware = [
  authChecker,
  sagaMiddleware,
];

export default function configureStore(initialState) {
  if (__DEV__) {
    Reactotron.use(reactotronRedux());
    createReduxStore = Reactotron.createStore;
  }

  const store = createReduxStore(rootReducer, initialState, applyMiddleware(...middleware));
  sagaMiddleware.run(rootSaga);
  return store;
}
