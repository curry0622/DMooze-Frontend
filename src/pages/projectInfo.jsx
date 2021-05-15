/* eslint-disable react/prop-types */
import React from 'react';
import GeneralLayout from '../layouts/generalLayout';
import ProjectInfoContainer from '../components/projectInfo';

const ProjectInfo = ({ match }) => {
  const {
    params: { id },
  } = match;

  return (
    <GeneralLayout>
      <ProjectInfoContainer id={id} />
    </GeneralLayout>
  );
};

export default ProjectInfo;
