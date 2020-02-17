import { call, put, takeEvery } from 'redux-saga/effects';

import { savedList } from '@services/http/events';

const init = {
  isLoading: false,
  list: [],
};

// <<<CONSTS>>>
const GET_SAVED_EVENTS_REQUEST = 'GET_SAVED_EVENTS_REQUEST';
const GET_SAVED_EVENTS_SUCCESS = 'GET_SAVED_EVENTS_SUCCESS';
const GET_SAVED_EVENTS_FAILED = 'GET_SAVED_EVENTS_FAILED';

// <<<REDUCER>>>
export default function reducer(state = init, action) {
  switch (action.type) {
    case GET_SAVED_EVENTS_REQUEST:
      return { ...state, isLoading: true };
    case GET_SAVED_EVENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        list: action.payload,
      };
    case GET_SAVED_EVENTS_FAILED:
      return { ...state, isLoading: false };
    default:
      return state;
  }
}

// <<<WORKERS>>>
function* getSavedEvents() {
  try {
    const data = yield call(savedList);
    yield put({ type: GET_SAVED_EVENTS_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: GET_SAVED_EVENTS_FAILED, error });
  }
}

// <<<ACTIONS>>>
export const fetchSavedEvents = () => ({ type: GET_SAVED_EVENTS_REQUEST });

// <<<WATCHERS>>>
export function* watchGetSavedEvents() {
  yield takeEvery(GET_SAVED_EVENTS_REQUEST, getSavedEvents);
}
