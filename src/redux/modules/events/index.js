import { call, put, takeEvery, select } from 'redux-saga/effects';

import { list, suggested, trending } from '@services/http/events';
import { LOCATION_SUCESS, RADIUS_CHANGE_SUCCESS } from '../location';
import { DATE_SUCESS } from '../date';

const init = {
  isLoading: false,
  isFeedLoading: false,
  list: [],
  suggested: [],
  trending: [],
};

// <<<CONSTS>>>
const EVENTS_REQUEST = 'EVENTS_REQUEST';
const EVENTS_SUCCESS = 'EVENTS_SUCCESS';
const EVENTS_FAILED = 'EVENTS_FAILED';

const FETCH_SUGGESTED_EVENTS_REQUEST = 'FETCH_SUGGESTED_EVENTS_REQUEST';
const FETCH_SUGGESTED_EVENTS_SUCCESS = 'FETCH_SUGGESTED_EVENTS_SUCCESS';
const FETCH_SUGGESTED_EVENTS_FAILED = 'FETCH_SUGGESTED_EVENTS_FAILED';

const FETCH_TRENDING_EVENTS_REQUEST = 'FETCH_TRENDING_EVENTS_REQUEST';
const FETCH_TRENDING_EVENTS_SUCCESS = 'FETCH_TRENDING_EVENTS_SUCCESS';
const FETCH_TRENDING_EVENTS_FAILED = 'FETCH_TRENDING_EVENTS_FAILED';

// <<<REDUCER>>>
export default function reducer(state = init, action) {
  switch (action.type) {
    case EVENTS_REQUEST:
    case LOCATION_SUCESS:
    case DATE_SUCESS:
    case RADIUS_CHANGE_SUCCESS:
      return {
        ...state,
        isFeedLoading: true,
      };
    case FETCH_SUGGESTED_EVENTS_REQUEST:
    case FETCH_TRENDING_EVENTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case EVENTS_SUCCESS:
      return {
        ...state,
        isFeedLoading: false,
        list: action.payload,
      };
    case EVENTS_FAILED:
      return {
        ...state,
        isFeedLoading: false,
      };
    case FETCH_SUGGESTED_EVENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        suggested: action.payload,
      };
    case FETCH_TRENDING_EVENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        trending: action.payload,
      };
    default:
      return state;
  }
}

// <<<WORKERS>>>
function* getEvents() {
  try {
    const { date, location } = yield select();
    const data = yield call(list, { date, location });
    yield put({ type: EVENTS_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: EVENTS_FAILED, error });
  }
}

function* getSuggestedEvents() {
  try {
    const data = yield call(suggested);
    yield put({ type: FETCH_SUGGESTED_EVENTS_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: FETCH_SUGGESTED_EVENTS_FAILED, error });
  }
}

function* getTrendingEvents() {
  try {
    const data = yield call(trending);
    yield put({ type: FETCH_TRENDING_EVENTS_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: FETCH_TRENDING_EVENTS_FAILED, error });
  }
}

// <<<ACTIONS>>>
export const fetchEvents = () => ({ type: EVENTS_REQUEST });
export const fetchSuggestedEvents = () => ({ type: FETCH_SUGGESTED_EVENTS_REQUEST });
export const fetchTrendingEvents = () => ({ type: FETCH_TRENDING_EVENTS_REQUEST });

// <<<WATCHERS>>>
export function* watchGetEvents() {
  yield takeEvery(EVENTS_REQUEST, getEvents);
  yield takeEvery(LOCATION_SUCESS, getEvents);
  yield takeEvery(RADIUS_CHANGE_SUCCESS, getEvents);
  yield takeEvery(DATE_SUCESS, getEvents);
  yield takeEvery(FETCH_SUGGESTED_EVENTS_REQUEST, getSuggestedEvents);
  yield takeEvery(FETCH_TRENDING_EVENTS_REQUEST, getTrendingEvents);
}
