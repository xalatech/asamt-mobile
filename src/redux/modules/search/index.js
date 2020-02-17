import { call, put, takeEvery } from 'redux-saga/effects';
import http from '@services/http/mocked';

// <<<CONSTS>>>
const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
const SEARCH_RESULT_REQUEST = 'SEARCH_RESULT_REQUEST';
const SEARCH_RESULT_SUCCESS = 'SEARCH_RESULT_SUCCESS';
const SEARCH_RESULT_FAILED = 'SEARCH_RESULT_FAILED';

const initialState = {
  inputValue: '',
  isLoading: false,
  list: [],
};

// <<<REDUCER>>>
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return { ...state, inputValue: action.payload };
    case SEARCH_RESULT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case SEARCH_RESULT_SUCCESS:
      return {
        ...state,
        list: action.payload.list,
        isLoading: false,
      };
    case SEARCH_RESULT_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}

// <<<WORKERS>>>
function* getResult() {
  try {
    const { data } = yield call(http.get, '/search');
    return yield put({
      type: SEARCH_RESULT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    return yield put({
      type: SEARCH_RESULT_FAILED,
    });
  }
}

// <<<ACTIONS>>>
export const handleInput = value => (
  {
    type: CHANGE_INPUT_VALUE,
    payload: value,
  });

export const onSubmit = value => (
  {
    type: SEARCH_RESULT_REQUEST,
    payload: value,
  });

// <<<WATCHERS>>>
export function* getResultWatcher() {
  yield takeEvery(SEARCH_RESULT_REQUEST, getResult);
}
