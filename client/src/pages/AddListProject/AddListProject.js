import './AddListProject.scss';

import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Input, Button } from 'antd';
import { addProject, loadProjects } from '../../actions';
import List from '../../components/List';

function AddListProject({ ...props }) {
  const dispatch = useDispatch();
  const [projectName, setProjectName] = useState('');
  const projects = useSelector(({ rootReducer }) => rootReducer.projects);

  useEffect(() => {
    dispatch(loadProjects(addNewProjectCallback));
    // eslint-disable-next-line
  }, []);

  const handleChangeProjectName = useCallback(
    (e) => {
      setProjectName(e.target.value);
    },
    [setProjectName]
  );

  const addNewProject = () => {
    dispatch(addProject(projectName));
  };

  const addNewProjectCallback = (err) => {
    console.log('err', err);
  };
  return (
    <div className="add-list-project">
      <div className="add-project-container">
        <span className="add-new-project-title">Add New Project: </span>
        <div className="add-new-project">
          <Input
            onChange={handleChangeProjectName}
            addonBefore="http://"
            addonAfter=".com"
            placeholder="enter host adress"
            defaultValue={projectName}
          />
          <Button onClick={addNewProject} type="primary">
            Create Project
          </Button>
        </div>
      </div>
      <div className="list-project-container">
        <List data={projects}></List>
      </div>
    </div>
  );
}

AddListProject.propTypes = {};

export default AddListProject;
