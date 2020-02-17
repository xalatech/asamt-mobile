import { call, put, takeEvery } from 'redux-saga/effects';
import update from 'immutability-helper';
import { listFormatter } from '@services/http/events/formatters';

import http from '@services/http/';

const initialState = {
  list: [],
  categories: [],
  isLoading: false,
  showCategories: true,
  events: [],
  loadingEvents: false,
};

// <<<CONSTS>>>
const CATEGORIES_FETCH = 'CATEGORIES_FETCH';
const CATEGORIES_UPDATE_REQUEST = 'CATEGORIES_UPDATE_REQUEST';
const CATEGORIES_UPDATE = 'CATEGORIES_UPDATE';
const CATEGORIES_POST = 'CATEGORIES_POST';
const CATEGORIES_CHANGE_VIEW = 'CATEGORIES_CHANGE_VIEW';

const CATEGORIES_GET_ALL_REQUEST = 'CATEGORIES_GET_ALL_REQUEST';
const CATEGORIES_GET_ALL_SUCCESS = 'CATEGORIES_GET_ALL_SUCCESS';
const CATEGORIES_GET_ALL_FAILURE = 'CATEGORIES_GET_ALL_FAILURE';

const CATEGORIES_GET_FEED_REQUEST = 'CATEGORIES_GET_FEED_REQUEST';
const CATEGORIES_GET_FEED_SUCCESS = 'CATEGORIES_GET_FEED_SUCCESS';
const CATEGORIES_GET_FEED_FAILURE = 'CATEGORIES_GET_FEED_FAILURE';

// <<<REDUCER>>>
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CATEGORIES_FETCH:
      return state;

    case CATEGORIES_UPDATE_REQUEST:
      return state;

    case CATEGORIES_UPDATE: {
      const newState = update(state.list, {
        [action.payload]:
          { isChecked: { $set: !state.list[action.payload].isChecked } },
      });
      return {
        ...state,
        list: newState,
      };
    }

    case CATEGORIES_CHANGE_VIEW:
      return {
        ...state, showCategories: !state.showCategories,
      };

    case CATEGORIES_POST:
      return state;

    case CATEGORIES_GET_ALL_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case CATEGORIES_GET_ALL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        list: action.payload,
      };
    case CATEGORIES_GET_ALL_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case CATEGORIES_GET_FEED_REQUEST:
      return {
        ...state,
        loadingEvents: true,
      };
    case CATEGORIES_GET_FEED_SUCCESS:
      return {
        ...state,
        loadingEvents: false,
        events: action.payload,
      };
    case CATEGORIES_GET_FEED_FAILURE:
      return {
        ...state,
        loadingEvents: false,
      };
    default:
      return state;
  }
}

// <<<WORKERS>>>
function* changeCheck(action) {
  return yield put({
    type: CATEGORIES_UPDATE,
    payload: action.payload,
  });
}

function* getAllCategories() {
  try {
    const { data } = yield call(http.get, '/categories/all');
    for (let i = 0; i < data.length; i += 1) {
      data[i].isChecked = false;
    }
    return yield put({
      type: CATEGORIES_GET_ALL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    return yield put({
      type: CATEGORIES_GET_ALL_FAILURE,
      error,
    });
  }
}

function* getCategoriesFeed({ payload }) {
  try {
    const { data } = yield call(http.post, 'events/category', payload);
    const newList = yield call(listFormatter, data);
    return yield put({
      type: CATEGORIES_GET_FEED_SUCCESS,
      payload: newList,
    });
  } catch (error) {
    console.log(error);
    return yield put({
      type: CATEGORIES_GET_FEED_FAILURE,
      error,
    });
  }
}

// <<<ACTIONS>>>
export const toggleCategory = index => ({
  type: CATEGORIES_UPDATE_REQUEST,
  payload: index,
});

export const changeView = () => ({
  type: CATEGORIES_CHANGE_VIEW,
});

export const fetchCategories = () => ({
  type: CATEGORIES_GET_ALL_REQUEST,
});

export const fetchCategoriesFeed = categories => ({
  type: CATEGORIES_GET_FEED_REQUEST,
  payload: categories,
});

// <<<WATCHERS>>>
export function* watchChangeCheck() {
  yield takeEvery(CATEGORIES_UPDATE_REQUEST, changeCheck);
}

export function* watchGetAllCategories() {
  yield takeEvery(CATEGORIES_GET_ALL_REQUEST, getAllCategories);
}

export function* watchGetCategoriesFeed() {
  yield takeEvery(CATEGORIES_GET_FEED_REQUEST, getCategoriesFeed);
}
