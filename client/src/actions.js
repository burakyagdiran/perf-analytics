import types from './action-types';

export const loadProjects = (callback) => ({
  type: types.LOAD_PROJECTS,
  callback,
});

export const projectsLoaded = (projects) => ({
  type: types.PROJECTS_LOADED,
  projects,
});

export const loadProjectsError = () => ({
  type: types.LOAD_PROJECTS_ERROR,
});

export const addProject = (hostName, callback) => ({
  type: types.ADD_PROJECT,
  hostName,
  callback,
});

export const projectAdded = (project) => ({
  type: types.PROJECT_ADDED,
  project,
});

export const addProjectError = () => ({
  type: types.ADD_PROJECT_ERROR,
});
