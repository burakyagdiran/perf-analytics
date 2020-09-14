import types from './action-types';

const initialState = {
  projects: [],
  projectsLoading: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_PROJECT:
      return {
        ...state,
        projectsLoading: true,
      };
    case types.PROJECT_ADDED:
      return {
        ...state,
        projects: [...state.projects, action.project],
        projectsLoading: false,
      };
    case types.ADD_PROJECT_ERROR:
      return {
        ...state,
        projectsLoading: false,
      };
    case types.LOAD_PROJECTS:
      return {
        ...state,
        projectsLoading: true,
      };
    case types.PROJECTS_LOADED:
      return {
        ...state,
        projects: action.projects,
        projectsLoading: false,
      };
    case types.LOAD_PROJECTS_ERROR:
      return {
        ...state,
        projectsLoading: false,
      };
    default:
      return state;
  }
};

export default rootReducer;
