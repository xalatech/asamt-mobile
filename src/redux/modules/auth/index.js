import { call, put, takeEvery } from 'redux-saga/effects';
import http from '@services/http';
import TokenStorage from '@services/storage/token';
import UserStorage from '@services/storage/user';
import LocationStorage from '@services/storage/location';

const SIGNUP_REQUEST = 'asamt/auth/SIGNUP_REQUEST';
const SIGNUP_SUCCESS = 'asamt/auth/SIGNUP_SUCCESS';
const SIGNUP_FAILURE = 'asamt/auth/SIGNUP_FAILURE';

const AUTHENTICATION_CHECK_REQUEST = 'asamt/auth/AUTHENTICATION_CHECK_REQUEST';
const AUTHENTICATION_CHECK_SUCCESS = 'asamt/auth/AUTHENTICATION_CHECK_SUCCESS';
const AUTHENTICATION_CHECK_FAILURE = 'asamt/auth/AUTHENTICATION_CHECK_FAILURE';

const BUSINESS_SIGNUP_REQUEST = 'asamt/auth/BUSINESS_SIGNUP_REQUEST';
const BUSINESS_SIGNUP_SUCCESS = 'asamt/auth/BUSINESS_SIGNUP_SUCCESS';
const BUSINESS_SIGNUP_FAILURE = 'asamt/auth/BUSINESS_SIGNUP_FAILURE';

const LOGIN_REQUEST = 'asamt/auth/LOGIN_REQUEST';
const LOGIN_SUCCESS = 'asamt/auth/LOGIN_SUCCESS';
const LOGIN_FAILURE = 'asamt/auth/LOGIN_FAILURE';

const FACEBOOK_LOGIN_REQUEST = 'asamt/auth/FACEBOOK_LOGIN_REQUEST';
const FACEBOOK_LOGIN_SUCCESS = 'asamt/auth/FACEBOOK_LOGIN_SUCCESS';
const FACEBOOK_LOGIN_FAILURE = 'asamt/auth/FACEBOOK_LOGIN_FAILURE';

const GOOGLE_LOGIN_REQUEST = 'asamt/auth/GOOGLE_LOGIN_REQUEST';
const GOOGLE_LOGIN_SUCCESS = 'asamt/auth/GOOGLE_LOGIN_SUCCESS';
const GOOGLE_LOGIN_FAILURE = 'asamt/auth/GOOGLELOGIN_FAILURE';

const LOGOUT_REQUEST = 'asamt/auth/LOGOUT_REQUEST';
const LOGOUT_SUCCESS = 'asamt/auth/LOGOUT_SUCCESS';
const LOGOUT_FAILURE = 'asamt/auth/LOGOUT_FAILURE';

const CHECK_INTERESTS_TRUE = 'asamt/auth/CHECK_INTERESTS_TRUE';

const SET_SHOULD_REDIRECT_TO_LOGIN = 'asamt/auth/SET_SHOULD_REDIRECT_TO_LOGIN';

export const INITIAL_STATE = {
  loading: false,
  signupError: {},
  loginError: '',
  user: {},
  setShouldRedirect: false,
  authenticated: false,
  location: {},
  shouldRedirectToLogin: false,
  haveInterests: false,
  googleAppId: '',
  facebookAppId: '',
};

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return { ...INITIAL_STATE, loading: true };
    case SIGNUP_SUCCESS:
      return {
        ...INITIAL_STATE, setShouldRedirect: true, authenticated: true, user: action.payload,
      };
    case SIGNUP_FAILURE:
      return { ...INITIAL_STATE, signupError: action.payload };
    case BUSINESS_SIGNUP_REQUEST:
      return { ...INITIAL_STATE, loading: true };
    case BUSINESS_SIGNUP_SUCCESS:
      return {
        ...INITIAL_STATE, setShouldRedirect: true, authenticated: true, ...action.payload,
      };
    case BUSINESS_SIGNUP_FAILURE:
      return { ...INITIAL_STATE, error: action.payload.message };
    case LOGIN_REQUEST:
      return { ...INITIAL_STATE, loading: true };
    case LOGIN_SUCCESS:
      return {
        ...INITIAL_STATE, setShouldRedirect: true, authenticated: true, user: action.payload,
      };
    case LOGIN_FAILURE:
      return { ...INITIAL_STATE, loginError: action.payload };
    case LOGOUT_REQUEST:
      return { ...INITIAL_STATE, loading: true };
    case LOGOUT_SUCCESS:
      return { ...INITIAL_STATE, authenticated: false, loading: false };
    case LOGOUT_FAILURE:
      return { ...INITIAL_STATE, loginError: action.payload.message };
    case AUTHENTICATION_CHECK_REQUEST:
      return { ...INITIAL_STATE, loading: true };
    case AUTHENTICATION_CHECK_SUCCESS:
      return { ...INITIAL_STATE, authenticated: true, setShouldRedirect: true };
    case AUTHENTICATION_CHECK_FAILURE:
      return { ...INITIAL_STATE };
    case SET_SHOULD_REDIRECT_TO_LOGIN:
      return { ...state, shouldRedirectToLogin: action.payload };
    case CHECK_INTERESTS_TRUE:
      return { ...state, haveInterests: true };
    case FACEBOOK_LOGIN_REQUEST:
      return { ...INITIAL_STATE, loading: true };
    case FACEBOOK_LOGIN_SUCCESS:
      return {
        ...INITIAL_STATE, authenticated: true, setShouldRedirect: true, user: action.payload,
      };
    case FACEBOOK_LOGIN_FAILURE:
      return { ...INITIAL_STATE };
    case GOOGLE_LOGIN_REQUEST:
      return { ...INITIAL_STATE, loading: true };
    case GOOGLE_LOGIN_SUCCESS:
      return {
        ...INITIAL_STATE, authenticated: true, setShouldRedirect: true, user: action.payload,
      };
    case GOOGLE_LOGIN_FAILURE:
      return { ...INITIAL_STATE };
    default:
      return state;
  }
}

// <<<ACTIONS>>>
export const requestSignUp = credentials => ({ type: SIGNUP_REQUEST, payload: credentials });
export const requestBusinessSignUp = credentials => (
  {
    type: BUSINESS_SIGNUP_REQUEST,
    payload: credentials,
  }
);
export const requestLogin = credentials => ({ type: LOGIN_REQUEST, payload: credentials });
export const requestLogout = () => ({ type: LOGOUT_REQUEST });
export const requestCheckAuthentication = () => ({ type: AUTHENTICATION_CHECK_REQUEST });
export const setShouldRedirectToLogin = payload => (
  { type: SET_SHOULD_REDIRECT_TO_LOGIN, payload }
);
export const requestFacebookLogin = token => ({ type: FACEBOOK_LOGIN_REQUEST, payload: token });
export const requestGoogleLogin = token => ({ type: GOOGLE_LOGIN_REQUEST, payload: token });

// <<<WORKERS>>>
function* signUp({ payload }) {
  try {
    const { data } = yield call(http.post, '/Users/signup', payload);
    yield call(TokenStorage.save, data.token);
    const user = {
      id: data.id,
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
    };
    yield call(UserStorage.save, user);
    yield put({ type: SIGNUP_SUCCESS, payload: data });
  } catch (error) {
    let errors = {};

    if (error.response.data && error.response.data.errors) {
      errors = error.response.data.errors.reduce((a, e) => {
        a[e.field] = e.message;
        return a;
      }, {});
    } else {
      errors.global = error.response.data;
    }

    yield put({ type: SIGNUP_FAILURE, payload: errors });
  }
}

function* login({ payload }) {
  try {
    const { data } = yield call(http.post, '/Users/login', payload);
    yield call(TokenStorage.save, data.token);
    const user = {
      id: data.id,
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
    };
    yield call(UserStorage.save, user);
    yield put({ type: LOGIN_SUCCESS, payload: data });
    const interests = yield call(http.get, '/interests/all');
    if (interests.data.length !== 0) {
      yield put({ type: CHECK_INTERESTS_TRUE });
    }
  } catch (error) {
    yield put({ type: LOGIN_FAILURE, payload: 'You entered incorrect username or password. Please try once again.' });
  }
}

function* logout() {
  try {
    yield put({ type: LOGOUT_SUCCESS });
    yield call(TokenStorage.delete);
    yield call(UserStorage.delete);
    yield call(LocationStorage.delete);
  } catch (error) {
    yield put({ type: LOGOUT_FAILURE, payload: error });
  }
}

function* checkAuthentication() {
  try {
    const storedToken = yield call(TokenStorage.get);

    if (storedToken) {
      yield put({ type: AUTHENTICATION_CHECK_SUCCESS });
    } else {
      yield put({ type: AUTHENTICATION_CHECK_FAILURE });
    }
  } catch (error) {
    yield put({ type: AUTHENTICATION_CHECK_FAILURE });
  }
}

function* businessSignUp({ payload }) {
  try {
    const data = yield call(http.post, '/business', payload);
    // yield call(TokenStorage.save, data.token);
    yield put({ type: BUSINESS_SIGNUP_SUCCESS, payload: data.entity });
  } catch (error) {
    yield put({ type: BUSINESS_SIGNUP_FAILURE, payload: error });
  }
}

function* facebookLogin({ payload }) {
  try {
    const { data } = yield call(http.get, `/Auth/FacebookAuthGranted?userAccessToken=${payload}`);
    yield call(TokenStorage.save, data.token);
    const user = {
      id: data.id,
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      avatarUrl: data.avatarUrl,
    };
    yield call(UserStorage.save, user);
    yield put({ type: FACEBOOK_LOGIN_SUCCESS, payload: data });
    const interests = yield call(http.get, '/interests/all');
    if (interests.data.length !== 0) {
      yield put({ type: CHECK_INTERESTS_TRUE });
    }
  } catch (error) {
    yield put({ type: FACEBOOK_LOGIN_FAILURE, payload: 'You entered incorrect username or password. Please try once again.' });
  }
}

function* googleLogin({ payload }) {
  try {
    const { data } = yield call(http.get, `/Auth/GoogleAuthGranted?userAccessToken=${payload}`);
    yield call(TokenStorage.save, data.token);
    const user = {
      id: data.id,
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      avatarUrl: data.avatarUrl,
    };
    yield call(UserStorage.save, user);
    yield put({ type: GOOGLE_LOGIN_SUCCESS, payload: data });
    const interests = yield call(http.get, '/interests/all');
    if (interests.data.length !== 0) {
      yield put({ type: CHECK_INTERESTS_TRUE });
    }
  } catch (error) {
    yield put({ type: GOOGLE_LOGIN_FAILURE, payload: 'You entered incorrect username or password. Please try once again.' });
  }
}
// <<<WATCHERS>>>
export function* watchSignUp() {
  yield takeEvery(SIGNUP_REQUEST, signUp);
}

export function* watchLogin() {
  yield takeEvery(LOGIN_REQUEST, login);
}

export function* watchLogout() {
  yield takeEvery(LOGOUT_REQUEST, logout);
}

export function* watchBusinessSignUp() {
  yield takeEvery(BUSINESS_SIGNUP_REQUEST, businessSignUp);
}

export function* watchCheckAuthentication() {
  yield takeEvery(AUTHENTICATION_CHECK_REQUEST, checkAuthentication);
}

export function* watchFacebookLogin() {
  yield takeEvery(FACEBOOK_LOGIN_REQUEST, facebookLogin);
}

export function* watchGoogleLogin() {
  yield takeEvery(GOOGLE_LOGIN_REQUEST, googleLogin);
}
