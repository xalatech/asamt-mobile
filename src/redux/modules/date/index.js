import { put, takeEvery } from 'redux-saga/effects';
import moment from 'moment';

const DATE_REQUEST = 'asamt/date/DATE_REQUEST';
export const DATE_SUCESS = 'asamt/date/DATE_SUCESS';
const DATE_FAILURE = 'asamt/date/DATE_FAILURE';

const currentDate = moment().format('L');

const initialState = {
  error: '',
  date: currentDate,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case DATE_REQUEST:
      return { ...state };
    case DATE_SUCESS:
      return { ...state, date: action.date };
    case DATE_FAILURE:
      return { ...state, error: action.payload.message };
    default:
      return state;
  }
}
// <<<ACTION>>>>
export const requestSetDate = date => ({ type: DATE_REQUEST, payload: date });
export const requestFastChangeDate = date => ({ type: DATE_REQUEST, payload: date });

// <<<WORKERS>>>
function* setDate({ payload }) {
  try {
    yield put({ type: DATE_SUCESS, date: payload });
  } catch (error) {
    yield put({ type: DATE_FAILURE, date: error });
  }
}

// <<<WATCHERS>>>
export function* watchSetDate() {
  yield takeEvery(DATE_REQUEST, setDate);
}
