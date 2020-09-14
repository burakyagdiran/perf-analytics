import types from './action-types';

const initialState = {
  pathNames: [],
  pathNamesLoading: false,
  performanceDatas: [],
  performanceDatasLoading: false,
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_PATH_NAMES:
      return {
        ...state,
        pathNamesLoading: true,
      };
    case types.PATH_NAMES_LOADED:
      return {
        ...state,
        pathNames: action.pathNames,
        pathNamesLoading: false,
      };
    case types.LOAD_PATH_NAMES_ERROR:
      return {
        ...state,
        pathNamesLoading: false,
      };
    case types.LOAD_PERFORMANCE_DATAS:
      return {
        ...state,
        performanceDatasLoading: true,
      };
    case types.PERFORMANCE_DATAS_LOADED:
      return {
        ...state,
        performanceDatas: action.performanceDatas,
        performanceDatasLoading: false,
      };
    case types.LOAD_PERFORMANCE_DATAS_ERROR:
      return {
        ...state,
        performanceDatasLoading: false,
      };
    case types.CLEAR_STATE:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default dashboardReducer;
