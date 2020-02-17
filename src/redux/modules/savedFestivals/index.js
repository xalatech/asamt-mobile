import { call, put, takeEvery } from 'redux-saga/effects';

import http from '@services/http/mocked';

const init = {
  isLoading: false,
  list: [],
};

// <<<CONSTS>>>
const GET_SAVED_FESTIVALS_REQUEST = 'GET_SAVED_FESTIVALS_REQUEST';
const GET_SAVED_FESTIVALS_SUCCESS = 'GET_SAVED_FESTIVALS_SUCCESS';
const GET_SAVED_FESTIVALS_FAILED = 'GET_SAVED_FESTIVALS_FAILED';

// <<<REDUCER>>>
export default function reducer(state = init, action) {
  switch (action.type) {
    case GET_SAVED_FESTIVALS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case GET_SAVED_FESTIVALS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        list: action.payload.list,
      };
    case GET_SAVED_FESTIVALS_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}

// <<<WORKERS>>>
function* getSavedFestivals() {
  try {
    const { data } = yield call(http.get, '/festivals/savedFestivals');
    return yield put({
      type: GET_SAVED_FESTIVALS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    return yield put({
      type: GET_SAVED_FESTIVALS_FAILED,
      error,
    });
  }
}

// <<<ACTIONS>>>
export const fetchSavedFestivals = () => ({ type: GET_SAVED_FESTIVALS_REQUEST });

// <<<WATCHERS>>>
export function* watchGetSavedFestivals() {
  yield takeEvery(GET_SAVED_FESTIVALS_REQUEST, getSavedFestivals);
}
