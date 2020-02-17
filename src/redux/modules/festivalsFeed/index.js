import { call, put, takeEvery } from 'redux-saga/effects';

import { list } from '@services/http/festivals';

const init = {
  isLoading: false,
  list: [],
};

// <<<CONSTS>>>
const FESTIVALS_REQUEST = 'FESTIVALS_REQUEST';
const FESTIVALS_SUCCESS = 'FESTIVALS_SUCCESS';
const FESTIVALS_FAILED = 'FESTIVALS_FAILED';

// <<<REDUCER>>>
export default function reducer(state = init, action) {
  switch (action.type) {
    case FESTIVALS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case FESTIVALS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        list: action.payload,
      };
    case FESTIVALS_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}

// <<<WORKERS>>>
function* getFestivals() {
  try {
    const data = yield call(list);
    yield put({ type: FESTIVALS_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: FESTIVALS_FAILED, error });
  }
}

// <<<ACTIONS>>>
export const fetchFestivals = () => ({ type: FESTIVALS_REQUEST });

// <<<WATCHERS>>>
export function* watchGetFestivals() {
  yield takeEvery(FESTIVALS_REQUEST, getFestivals);
}
