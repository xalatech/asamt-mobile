import { call, put, takeEvery } from 'redux-saga/effects';

import { details, saveActivities, deleteSaveActivities } from '@services/http/activities';

import { fetchSavedEvents } from '../savedEvents';

const init = {
  isLoading: false,
  activity: {},
};

// <<<CONSTS>>>
const ACTIVITY_REQUEST = 'ACTIVITY_REQUEST';
const ACTIVITY_SUCCESS = 'ACTIVITY_SUCCESS';
const ACTIVITY_FAILED = 'ACTIVITY_FAILED';
const ACTIVITY_ADD_TO_FAVOURITE_REQUEST = 'ACTIVITY_ADD_TO_FAVOURITE_REQUEST';
const ACTIVITY_ADD_TO_FAVOURITE_SUCCESS = 'ACTIVITY_ADD_TO_FAVOURITE_SUCCESS';
const ACTIVITY_ADD_TO_FAVOURITE_FAILED = 'ACTIVITY_ADD_TO_FAVOURITE_FAILED';
const ACTIVITY_REMOVE_FROM_FAVOURITE_REQUEST = 'ACTIVITY_REMOVE_FROM_FAVOURITE_REQUEST';
const ACTIVITY_REMOVE_FROM_FAVOURITE_SUCCESS = 'ACTIVITY_REMOVE_FROM_FAVOURITE_SUCCESS';
const ACTIVITY_REMOVE_FROM_FAVOURITE_FAILED = 'ACTIVITY_REMOVE_FROM_FAVOURITE_FAILED';

// <<<REDUCER>>>
export default function reducer(state = init, action) {
  switch (action.type) {
    case ACTIVITY_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ACTIVITY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        activity: action.payload,
      };
    case ACTIVITY_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}

// <<<WORKERS>>>
function* getActivity(action) {
  const eventId = action.payload;
  try {
    const data = yield call(details, eventId);
    yield put({ type: ACTIVITY_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: ACTIVITY_FAILED, error });
  }
}

function* addToFavourite(action) {
  const eventId = action.payload;
  try {
    yield call(saveActivities, eventId);
    yield put({ type: ACTIVITY_ADD_TO_FAVOURITE_SUCCESS });
    yield put(fetchSavedEvents());
  } catch (error) {
    yield put({ type: ACTIVITY_ADD_TO_FAVOURITE_FAILED, error });
  }
}

function* removeFromFavourite(action) {
  const eventId = action.payload;
  try {
    yield call(deleteSaveActivities, eventId);
    yield put({ type: ACTIVITY_REMOVE_FROM_FAVOURITE_SUCCESS });
    yield put(fetchSavedEvents());
  } catch (error) {
    yield put({ type: ACTIVITY_REMOVE_FROM_FAVOURITE_FAILED, error });
  }
}

// <<<ACTIONS>>>
export const loadActivity = id => ({
  type: ACTIVITY_REQUEST,
  payload: id,
});

export const addToFavouriteRequest = id => ({
  type: ACTIVITY_ADD_TO_FAVOURITE_REQUEST,
  payload: id,
});

export const removeFromFavouriteRequest = id => ({
  type: ACTIVITY_REMOVE_FROM_FAVOURITE_REQUEST,
  payload: id,
});

// <<<WATCHERS>>>
export function* watchActivityDetails() {
  yield takeEvery(ACTIVITY_REQUEST, getActivity);
  yield takeEvery(ACTIVITY_ADD_TO_FAVOURITE_REQUEST, addToFavourite);
  yield takeEvery(ACTIVITY_REMOVE_FROM_FAVOURITE_REQUEST, removeFromFavourite);
}
