import { call, put, takeEvery } from 'redux-saga/effects';

import http from '@services/http/mocked';

const initialState = {
  isLoading: false,
  error: '',
  list: '',
  unreadNotifications: 3,
};

// <<<CONSTS>>>
const NOTIFICATIONS_REQUEST = 'NOTIFICATIONS_REQUEST';
const NOTIFICATIONS_SUCCESS = 'NOTIFICATIONS_SUCCESS';
const NOTIFICATIONS_FAILED = 'NOTIFICATIONS_FAILED';
const NOTIFICATIONS_READED = 'NOTIFICATION_READED';

// <<<REDUCERS>>>
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case NOTIFICATIONS_REQUEST:
      return { ...state, isLoading: true };
    case NOTIFICATIONS_SUCCESS:
      return { ...state, isLoading: false, list: action.payload };
    case NOTIFICATIONS_FAILED:
      return { ...state, isLoading: false, error: action.payload.message };
    case NOTIFICATIONS_READED:
      return { ...state, unreadNotifications: 0 };
    default:
      return state;
  }
}
// <<<ACTION>>>>
export const requestNotifications = () => ({ type: NOTIFICATIONS_REQUEST });
export const openNotifications = () => ({ type: NOTIFICATIONS_READED });

// <<<WORKERS>>>
function* fetchNotifications() {
  try {
    const { data } = yield call(http.get, '/notifications');
    return yield put({
      type: NOTIFICATIONS_SUCCESS,
      payload: data.list,
    });
  } catch (error) {
    console.log(error);
    return yield put({
      type: NOTIFICATIONS_FAILED,
      error,
    });
  }
}

// <<<WATCHERS>>>
export function* watchRequestNotifications() {
  yield takeEvery(NOTIFICATIONS_REQUEST, fetchNotifications);
}
