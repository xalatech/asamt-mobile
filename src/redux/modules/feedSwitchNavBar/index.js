import { put, takeEvery } from 'redux-saga/effects';

const init = {
  type: 'Events',
};

// <<<CONSTS>>>
const CHANGE_TYPE_REQUEST = 'CHANGE_TYPE_REQUEST';
const CHANGE_TYPE_SUCCESS = 'CHANGE_TYPE_SUCCESS';
const CHANGE_TYPE_FAILED = 'CHANGE_TYPE_FAILED';

// <<<REDUCER>>>
export default function reducer(state = init, action) {
  switch (action.type) {
    case CHANGE_TYPE_REQUEST:
      return state;

    case CHANGE_TYPE_SUCCESS:
      return {
        ...state,
        type: action.payload,
      };

    case CHANGE_TYPE_FAILED:
      return {
        ...state,
      };

    default:
      return state;
  }
}

// <<<WORKERS>>>
function* switchType({ payload }) {
  try {
    yield put({ type: CHANGE_TYPE_SUCCESS, payload });
  } catch (error) {
    console.log(error);
    yield put({ type: CHANGE_TYPE_FAILED, error });
  }
}

// <<<ACTIONS>>>
export const requestChangeType = type => ({ type: CHANGE_TYPE_REQUEST, payload: type });

// <<<WATCHERS>>>
export function* watchRequestChangeType() {
  yield takeEvery(CHANGE_TYPE_REQUEST, switchType);
}
