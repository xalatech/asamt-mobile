import { put, takeEvery } from 'redux-saga/effects';

// <<<CONSTS>>>
const CHANGE_CURRENT_SCREEN_REQUEST = 'CHANGE_CURRENT_SCREEN_REQUEST';
const CHANGE_CURRENT_SCREEN_SUCCESS = 'CHANGE_CURRENT_SCREEN_SUCCESS';

const initialState = {
  currentScreen: '',
};

// <<<REDUCER>>>
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case CHANGE_CURRENT_SCREEN_SUCCESS:
      return { ...state, ...{ currentScreen: action.payload } };
    default:
      return state;
  }
}

// <<<WORKERS>>>
function* changingScreen(newScreen) {
  return yield put({
    type: CHANGE_CURRENT_SCREEN_SUCCESS,
    payload: newScreen,
  });
}

// <<<ACTIONS>>>
export const changeScreen = newScreen => (
  {
    type: CHANGE_CURRENT_SCREEN_REQUEST,
    payload: newScreen,
  });

// <<<WATCHERS>>>
export function* watchChangeScreen() {
  yield takeEvery(CHANGE_CURRENT_SCREEN_REQUEST, changingScreen);
}
