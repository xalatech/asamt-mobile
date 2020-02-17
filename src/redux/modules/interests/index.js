import { put, takeEvery, call } from 'redux-saga/effects';
import { formatInterest } from '@helpers';
import update from 'immutability-helper';
import http from '../../../services/http';

const initialState = {
  list: [],
  isLoading: false,
};

// <<<CONSTS>>>
const INTERESTS_FETCH = 'INTERESTS_FETCH';
const INTERESTS_UPDATE_REQUEST = 'INTERESTS_UPDATE_REQUEST';
const INTERESTS_UPDATE = 'INTERESTS_UPDATE';

const INTERESTS_POST = 'INTERESTS_POST';

const INTERESTS_POST_REQUEST = 'INTERESTS_POST_REQUEST';
const INTERESTS_POST_SUCCESS = 'INTERESTS_POST_SUCCESS';
const INTERESTS_POST_FAILURE = 'INTERESTS_POST_FAILURE';

const INTERESTS_DELETE_REQUEST = 'INTERESTS_DELETE_REQUEST';
const INTERESTS_DELETE_SUCCESS = 'INTERESTS_DELETE_SUCCESS';
const INTERESTS_DELETE_FAILURE = 'INTERESTS_DELETE_FAILURE';

const INTERESTS_GET_REQUEST = 'INTERESTS_GET_REQUEST';
const INTERESTS_GET_SUCCESS = 'INTERESTS_GET_SUCCESS';
const INTERESTS_GET_FAILURE = 'INTERESTS_GET_FAILURE';

// <<<REDUCER>>>
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case INTERESTS_FETCH:
      return state;

    case INTERESTS_UPDATE_REQUEST:
      return state;

    case INTERESTS_UPDATE: {
      const newState = update(state.list, {
        [action.payload]:
          { isChecked: { $set: !state.list[action.payload].isChecked } },
      });
      return {
        ...state,
        list: newState,
      };
    }

    case INTERESTS_POST:
      return state;

    case INTERESTS_GET_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case INTERESTS_GET_SUCCESS:
      return {
        ...state,
        list: action.payload,
        isLoading: false,
      };

    case INTERESTS_GET_FAILURE:
      return {
        ...state,
        isLoading: false,
      };

    case INTERESTS_POST_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case INTERESTS_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case INTERESTS_POST_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case INTERESTS_DELETE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case INTERESTS_DELETE_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case INTERESTS_DELETE_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}

// <<<WORKERS>>>
function* changeCheck(action) {
  return yield put({
    type: INTERESTS_UPDATE,
    payload: action.payload,
  });
}

function* getInterests() {
  try {
    const { data } = yield call(http.get, '/interests/all');
    return yield put({
      type: INTERESTS_GET_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    return yield put({
      type: INTERESTS_GET_FAILURE,
      error,
    });
  }
}

function* postInterest({ payload }) {
  try {
    const params = formatInterest(payload);
    yield call(http.post, '/interests', params);
    const { data } = yield call(http.get, '/interests/all');
    yield put({
      type: INTERESTS_GET_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: INTERESTS_POST_FAILURE,
      error,
    });
  }
}

function* deleteInterest({ payload }) {
  try {
    yield call(http.delete, `/interests/${payload}`);
    const { data } = yield call(http.get, '/interests/all');
    yield put({
      type: INTERESTS_GET_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: INTERESTS_DELETE_FAILURE,
      error,
    });
  }
}
// <<<ACTIONS>>>
export const toggleInterest = index => ({
  type: INTERESTS_UPDATE_REQUEST,
  payload: index,
});

export const fetchAllInterests = () => ({
  type: INTERESTS_GET_REQUEST,
});

export const requestPostInterest = id => ({
  type: INTERESTS_POST_REQUEST,
  payload: id,
});

export const requestDeleteInterest = id => ({
  type: INTERESTS_DELETE_REQUEST,
  payload: id,
});

// <<<WATCHERS>>>
export function* watchChangeCheck() {
  yield takeEvery(INTERESTS_UPDATE_REQUEST, changeCheck);
}

export function* watchGetAllInterests() {
  yield takeEvery(INTERESTS_GET_REQUEST, getInterests);
}

export function* watchPostInterest() {
  yield takeEvery(INTERESTS_POST_REQUEST, postInterest);
}

export function* watchDeleteInterest() {
  yield takeEvery(INTERESTS_DELETE_REQUEST, deleteInterest);
}
