import find from 'lodash/find';
import { call, put, takeEvery } from 'redux-saga/effects';
import { details, list } from '@services/http/festivals';
import httpMocked from '@services/http/mocked';

const init = {
  isLoading: false,
  event: {},
  topFestival: {},
  schedule: [],
};

// <<<CONSTS>>>
const FESTIVAL_REQUEST = 'FESTIVAL_REQUEST';
const FESTIVAL_SUCCESS = 'FESTIVAL_SUCCESS';
const FESTIVAL_FAILED = 'FESTIVAL_FAILED';

const TOP_FESTIVAL_REQUEST = 'TOP_FESTIVAL_REQUEST';
const TOP_FESTIVAL_SUCCESS = 'TOP_FESTIVAL_SUCCESS';
const TOP_FESTIVAL_FAILED = 'TOP_FESTIVAL_FAILED';

const SCHEDULE_REQUEST = 'SCHEDULE_REQUEST';
const SCHEDULE_SUCCESS = 'SCHEDULE_SUCCESS';
const SCHEDULE_FAILED = 'SCHEDULE_FAILED';

// <<<REDUCER>>>
export default function reducer(state = init, action) {
  switch (action.type) {
    case FESTIVAL_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FESTIVAL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        event: action.payload,
      };
    case FESTIVAL_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    case TOP_FESTIVAL_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case TOP_FESTIVAL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        topFestival: action.payload,
      };
    case TOP_FESTIVAL_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    case SCHEDULE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case SCHEDULE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        schedule: action.payload.schedule,
      };
    case SCHEDULE_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}

// <<<WORKERS>>>
function* getFestival(action) {
  const id = action.payload;

  try {
    const data = yield call(details, id);
    yield put({ type: FESTIVAL_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: FESTIVAL_FAILED, error });
  }
}

function* getSchedule() {
  try {
    const { data } = yield call(httpMocked.get, '/festival/schedule');
    return yield put({
      type: SCHEDULE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    return yield put({
      type: SCHEDULE_FAILED,
      error,
    });
  }
}

function* getTopFestival() {
  try {
    const data = yield call(list);
    const festival = find(data, { id: 'be140aea-2634-4ede-9958-002f2ff8091d' });

    yield put({
      type: TOP_FESTIVAL_SUCCESS,
      payload: festival,
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: TOP_FESTIVAL_FAILED,
      error,
    });
  }
}

// <<<ACTIONS>>>
export const loadFestival = id => ({
  type: FESTIVAL_REQUEST,
  payload: id,
});

export const fetchSchedule = () => ({ type: SCHEDULE_REQUEST });

export const loadTopFestival = () => ({ type: TOP_FESTIVAL_REQUEST });

// <<<WATCHERS>>>
export function* watchGetFestival() {
  yield takeEvery(FESTIVAL_REQUEST, getFestival);
}

export function* watchGetSchedule() {
  yield takeEvery(SCHEDULE_REQUEST, getSchedule);
}

export function* watchGetTopFestival() {
  yield takeEvery(TOP_FESTIVAL_REQUEST, getTopFestival);
}
