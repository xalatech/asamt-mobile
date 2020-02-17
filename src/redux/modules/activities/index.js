import { call, put, takeEvery } from 'redux-saga/effects';

import { list, suggested, trending } from '@services/http/activities';

const init = {
  isLoading: false,
  activities: [],
  trending: [],
  suggested: [],
};

// <<<CONSTS>>>
const ACTIVITIES_REQUEST = 'ACTIVITIES_REQUEST';
const ACTIVITIES_SUCCESS = 'ACTIVITIES_SUCCESS';
const ACTIVITIES_FAILED = 'ACTIVITIES_FAILED';

const FETCH_SUGGESTED_ACTIVITIES_REQUEST = 'FETCH_SUGGESTED_ACTIVITIES_REQUEST';
const FETCH_SUGGESTED_ACTIVITIES_SUCCESS = 'FETCH_SUGGESTED_ACTIVITIES_SUCCESS';
const FETCH_SUGGESTED_ACTIVITIES_FAILED = 'FETCH_SUGGESTED_ACTIVITIES_FAILED';

const FETCH_TRENDING_ACTIVITIES_REQUEST = 'FETCH_TRENDING_ACTIVITIES_REQUEST';
const FETCH_TRENDING_ACTIVITIES_SUCCESS = 'FETCH_TRENDING_ACTIVITIES_SUCCESS';
const FETCH_TRENDING_ACTIVITIES_FAILED = 'FETCH_TRENDING_ACTIVITIES_FAILED';

// <<<REDUCER>>>
export default function reducer(state = init, action) {
  switch (action.type) {
    case ACTIVITIES_REQUEST:
    case FETCH_SUGGESTED_ACTIVITIES_REQUEST:
    case FETCH_TRENDING_ACTIVITIES_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case ACTIVITIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        activities: action.payload,
      };
    case ACTIVITIES_FAILED:
      return {
        ...state,
        isLoading: false,
      };

    case FETCH_SUGGESTED_ACTIVITIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        suggested: action.payload,
      };
    case FETCH_TRENDING_ACTIVITIES_SUCCESS:
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
function* getActivities() {
  try {
    const data = yield call(list);
    return yield put({
      type: ACTIVITIES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    return yield put({
      type: ACTIVITIES_FAILED,
      error,
    });
  }
}

function* getSuggestedActivities() {
  try {
    const data = yield call(suggested);
    yield put({ type: FETCH_SUGGESTED_ACTIVITIES_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: FETCH_SUGGESTED_ACTIVITIES_FAILED, error });
  }
}

function* getTrendingActivities() {
  try {
    const data = yield call(trending);
    yield put({ type: FETCH_TRENDING_ACTIVITIES_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: FETCH_TRENDING_ACTIVITIES_FAILED, error });
  }
}

// <<<ACTIONS>>>
export const fetchActivities = () => ({ type: ACTIVITIES_REQUEST });
export const fetchSuggestedActivities = () => ({ type: FETCH_SUGGESTED_ACTIVITIES_REQUEST });
export const fetchTrendingActivities = () => ({ type: FETCH_TRENDING_ACTIVITIES_REQUEST });

// <<<WATCHERS>>>
export function* watchGetActivities() {
  yield takeEvery(ACTIVITIES_REQUEST, getActivities);
  yield takeEvery(FETCH_SUGGESTED_ACTIVITIES_REQUEST, getSuggestedActivities);
  yield takeEvery(FETCH_TRENDING_ACTIVITIES_REQUEST, getTrendingActivities);
}
