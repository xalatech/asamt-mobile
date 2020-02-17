import { call, put, takeEvery } from 'redux-saga/effects';

import { details, saveEvent, deleteSaveEvent } from '@services/http/events';
import { fetchSavedEvents } from '../savedEvents';

const init = {
  isLoading: false,
  event: {},
};

// <<<CONSTS>>>
const EVENT_REQUEST = 'EVENT_REQUEST';
const EVENT_SUCCESS = 'EVENT_SUCCESS';
const EVENT_FAILED = 'EVENT_FAILED';
const EVENT_ADD_TO_FAVOURITE_REQUEST = 'EVENT_ADD_TO_FAVOURITE_REQUEST';
const EVENT_ADD_TO_FAVOURITE_SUCCESS = 'EVENT_ADD_TO_FAVOURITE_SUCCESS';
const EVENT_ADD_TO_FAVOURITE_FAILED = 'EVENT_ADD_TO_FAVOURITE_FAILED';
const EVENT_REMOVE_FROM_FAVOURITE_REQUEST = 'EVENT_REMOVE_FROM_FAVOURITE_REQUEST';
const EVENT_REMOVE_FROM_FAVOURITE_SUCCESS = 'EVENT_REMOVE_FROM_FAVOURITE_SUCCESS';
const EVENT_REMOVE_FROM_FAVOURITE_FAILED = 'EVENT_REMOVE_FROM_FAVOURITE_FAILED';

// <<<REDUCER>>>
export default function reducer(state = init, action) {
  switch (action.type) {
    case EVENT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case EVENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        event: action.payload,
      };
    case EVENT_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}

// <<<WORKERS>>>
function* getEvent(action) {
  const eventId = action.payload;
  try {
    const data = yield call(details, eventId);
    yield put({ type: EVENT_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: EVENT_FAILED, error });
  }
}

function* addToFavourite(action) {
  const eventId = action.payload;
  try {
    yield call(saveEvent, eventId);
    yield put({ type: EVENT_ADD_TO_FAVOURITE_SUCCESS });
    yield put(fetchSavedEvents());
  } catch (error) {
    yield put({ type: EVENT_ADD_TO_FAVOURITE_FAILED, error });
  }
}

function* removeFromFavourite(action) {
  const eventId = action.payload;
  try {
    yield call(deleteSaveEvent, eventId);
    yield put({ type: EVENT_REMOVE_FROM_FAVOURITE_SUCCESS });
    yield put(fetchSavedEvents());
  } catch (error) {
    yield put({ type: EVENT_REMOVE_FROM_FAVOURITE_FAILED, error });
  }
}

// <<<ACTIONS>>>
export const loadEvent = id => ({
  type: EVENT_REQUEST,
  payload: id,
});

export const addToFavouriteRequest = id => ({
  type: EVENT_ADD_TO_FAVOURITE_REQUEST,
  payload: id,
});

export const removeFromFavouriteRequest = id => ({
  type: EVENT_REMOVE_FROM_FAVOURITE_REQUEST,
  payload: id,
});

// <<<WATCHERS>>>
export function* watchEventDetails() {
  yield takeEvery(EVENT_REQUEST, getEvent);
  yield takeEvery(EVENT_ADD_TO_FAVOURITE_REQUEST, addToFavourite);
  yield takeEvery(EVENT_REMOVE_FROM_FAVOURITE_REQUEST, removeFromFavourite);
}
