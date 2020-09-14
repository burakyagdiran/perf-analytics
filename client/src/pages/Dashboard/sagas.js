import { put, call, takeLatest } from 'redux-saga/effects';
import types from './action-types';
import {
  pathNamesLoaded,
  loadPathNamesError,
  performanceDatasLoaded,
  loadPerformanceDatasError,
} from './actions';
import api from '../../api';

function* loadPathNames({ hostName, callback }) {
  // eslint-disable-next-line
  const [res, error] = yield call(api.get(`/projects/${hostName}`));
  if (res) {
    yield put(pathNamesLoaded(res));
  } else {
    yield put(loadPathNamesError());
  }
}

function* loadPerformanceDatas({ hostName, pathName, callback }) {
  // eslint-disable-next-line
  const [res, error] = yield call(api.get(`/projects/${hostName}/${pathName}`));
  if (res) {
    yield put(performanceDatasLoaded(res));
    callback();
  } else {
    yield put(loadPerformanceDatasError());
    callback();
  }
}

export default function* dashboardSaga() {
  yield takeLatest(types.LOAD_PATH_NAMES, loadPathNames);
  yield takeLatest(types.LOAD_PERFORMANCE_DATAS, loadPerformanceDatas);
}
