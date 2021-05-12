/* eslint-disable react/prop-types */
import React from 'react';
import GeneralLayout from '../layouts/generalLayout';
import ProjectInfoContainer from '../components/projectInfo';

const ProjectInfo = ({ match }) => {
  const {
    params: { addr },
  } = match;

  return (
    <GeneralLayout>
      <ProjectInfoContainer addr={addr} />
    </GeneralLayout>
  );
};

export default ProjectInfo;
