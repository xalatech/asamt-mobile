import { call, put, takeEvery } from 'redux-saga/effects';

import LocationStorage from '@services/storage/location';

const LOCATION_REQUEST = 'asamt/location/LOCATION_REQUEST';
export const LOCATION_SUCESS = 'asamt/location/LOCATION_SUCESS';
const LOCATION_FAILURE = 'asamt/location/LOCATION_FAILURE';

const CURRENT_LOCATION_REQUEST = 'asamt/location/CURRENT_LOCATION_REQUEST';
const CURRENT_LOCATION_SUCESS = 'asamt/location/CURRENT_LOCATION_SUCESS';
const CURRENT_LOCATION_FAILURE = 'asamt/location/CURRENT_LOCATION_FAILURE';

const RADIUS_CHANGE_REQUEST = 'asamt/location/RADIUS_CHANGE_REQUEST';
export const RADIUS_CHANGE_SUCCESS = 'asamt/location/RADIUS_CHANGE_SUCCESS';
const RADIUS_CHANGE_FAILED = 'asamt/location/RADIUS_CHANGE_FAILED';

const ACCESS_DENIED = 'asamt/location/ACCESS_DENIED';

export const initialState = {
  loading: false,
  error: '',
  location: '',
  coords: '',
  locationAccess: true,
  geolocation: {},
  radius: 10,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOCATION_REQUEST:
      return { ...state, loading: true };
    case LOCATION_SUCESS:
      return {
        ...state,
        loading: false,
        location: action.payload,
        coords: action.payload.geometry.location,
      };
    case LOCATION_FAILURE:
      return { ...state, loading: false, error: action.payload.message };
    case CURRENT_LOCATION_REQUEST:
      return { ...state, loading: true };
    case CURRENT_LOCATION_SUCESS:
      return {
        ...state, loading: false, geolocation: action.payload,
      };
    case CURRENT_LOCATION_FAILURE:
      return { ...state, loading: false, error: action.payload.message };
    case ACCESS_DENIED:
      return { ...state, locationAccess: false };
    case RADIUS_CHANGE_SUCCESS:
      return { ...state, radius: action.payload };
    default:
      return state;
  }
}
// <<<ACTION>>>>
export const geolocation = coords => ({ type: CURRENT_LOCATION_SUCESS, payload: coords });
export const requestLocation = details => ({ type: LOCATION_REQUEST, payload: details });
export const requestCurrentLocation = coords => ({ type: LOCATION_REQUEST, payload: coords });
export const requestAccessDenied = () => ({ type: ACCESS_DENIED });
export const requestChangeRadius = radius => ({ type: RADIUS_CHANGE_REQUEST, payload: radius });

// <<<WORKERS>>>
function* addLocation({ payload }) {
  try {
    yield call(LocationStorage.save, payload);
    yield put({ type: LOCATION_SUCESS, payload });
  } catch (error) {
    yield put({ type: LOCATION_FAILURE, location: error });
  }
}

function* addCurrentLocation({ payload }) {
  try {
    yield put({ type: CURRENT_LOCATION_SUCESS, payload });
  } catch (error) {
    yield put({ type: CURRENT_LOCATION_FAILURE, location: error });
  }
}

function* changeRadius({ payload }) {
  try {
    yield put({ type: RADIUS_CHANGE_SUCCESS, payload });
  } catch (error) {
    yield put({ type: RADIUS_CHANGE_FAILED, error });
  }
}

// <<<WATCHERS>>>
// <<<WATCHERS>>>
export function* watchAddLocation() {
  yield takeEvery(LOCATION_REQUEST, addLocation);
}

export function* watchAddCurrentLocation() {
  yield takeEvery(CURRENT_LOCATION_REQUEST, addCurrentLocation);
}

export function* watchChangeRadius() {
  yield takeEvery(RADIUS_CHANGE_REQUEST, changeRadius);
}
