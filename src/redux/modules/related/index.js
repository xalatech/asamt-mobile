import { call, put, takeEvery } from 'redux-saga/effects';

import http from '@services/http/mocked';

const init = {
  isLoading: false,
  list: [],
};

// <<<CONSTS>>>
const RELATED_EVENTS_REQUEST = 'RELATED_EVENTS_REQUEST';
const RELATED_EVENTS_SUCCESS = 'RELATED_EVENTS_SUCCESS';
const RELATED_EVENTS_FAILED = 'RELATED_EVENTS_FAILED';

// <<<REDUCER>>>
export default function reducer(state = init, action) {
  switch (action.type) {
    case RELATED_EVENTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case RELATED_EVENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        list: action.payload.list,
      };
    case RELATED_EVENTS_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}

// <<<WORKERS>>>
function* getRelatedEvents() {
  try {
    const { data } = yield call(http.get, '/related');
    return yield put({
      type: RELATED_EVENTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    return yield put({
      type: RELATED_EVENTS_FAILED,
      error,
    });
  }
}

// <<<ACTIONS>>>
export const fetchRelatedEvents = () => ({ type: RELATED_EVENTS_REQUEST });

// <<<WATCHERS>>>
export function* watchGetRelatedEvents() {
  yield takeEvery(RELATED_EVENTS_REQUEST, getRelatedEvents);
}
