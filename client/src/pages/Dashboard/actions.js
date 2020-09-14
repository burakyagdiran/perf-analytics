import types from './action-types';

export const loadPathNames = (hostName, callback) => ({
  type: types.LOAD_PATH_NAMES,
  hostName,
  callback,
});
export const pathNamesLoaded = (pathNames) => ({
  type: types.PATH_NAMES_LOADED,
  pathNames,
});

export const loadPathNamesError = () => ({
  type: types.LOAD_PATH_NAMES_ERROR,
});

export const loadPerformanceDatas = (hostName, pathName, callback) => ({
  type: types.LOAD_PERFORMANCE_DATAS,
  hostName,
  pathName,
  callback,
});

export const performanceDatasLoaded = (performanceDatas) => ({
  type: types.PERFORMANCE_DATAS_LOADED,
  performanceDatas,
});

export const loadPerformanceDatasError = () => ({
  type: types.LOAD_PERFORMANCE_DATAS_ERROR,
});

export const clearState = () => {
  return { type: types.CLEAR_STATE };
};
