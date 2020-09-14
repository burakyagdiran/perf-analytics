import { put, call, takeLatest } from 'redux-saga/effects';
import types from './action-types';
import {
  projectAdded,
  addProjectError,
  projectsLoaded,
  loadProjectsError,
} from './actions';
import api from './api';

function* addProject({ hostName, callback }) {
  const params = { hostName };
  // eslint-disable-next-line
  const [result, error] = yield call(api.post('/projects', params));
  if (result) {
    yield put(projectAdded(result.project));
  } else {
    yield put(addProjectError());
  }
}

function* loadProjects({ callback }) {
  // eslint-disable-next-line
  const [result, error] = yield call(api.get('/projects'));
  if (result) {
    yield put(projectsLoaded(result));
  } else {
    yield put(loadProjectsError());
  }
}

export default function* dashboardSaga() {
  yield takeLatest(types.ADD_PROJECT, addProject);
  yield takeLatest(types.LOAD_PROJECTS, loadProjects);
}
