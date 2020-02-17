import { call, put, takeEvery } from 'redux-saga/effects';

import { createEvent } from '@services/http/createEvent';

const init = {
  isLoading: false,
  data: [],
  isPostSuccess: false,
};

// <<<CONSTS>>>
const CREATE_EVENT_REQUEST = 'CREATE_EVENT_REQUEST';
const CREATE_EVENT_SUCCESS = 'CREATE_EVENT_SUCCESS';
const CREATE_EVENT_FAILED = 'CREATE_EVENT_FAILED';

// <<<REDUCER>>>
export default function reducer(state = init, action) {
  switch (action.type) {
    case CREATE_EVENT_REQUEST:
      return {
        ...state,
        isLoading: true,
        isPostSuccess: false,
      };

    case CREATE_EVENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isPostSuccess: true,
      };
    case CREATE_EVENT_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}

// <<<WORKERS>>>
function* postEvent({ payload }) {
  try {
    yield call(createEvent, payload);
    yield put({ type: CREATE_EVENT_SUCCESS });
  } catch (error) {
    console.log(error);
    yield put({ type: CREATE_EVENT_FAILED, error });
  }
}

// <<<ACTIONS>>>
export const submitEvent = values => ({ type: CREATE_EVENT_REQUEST, payload: values });

// <<<WATCHERS>>>
export function* watchPostEvent() {
  yield takeEvery(CREATE_EVENT_REQUEST, postEvent);
}
