/* eslint-disable react/prop-types */
import React from 'react';
import GeneralLayout from '../layouts/generalLayout';
import ProjectInfoContainer from '../components/projectInfo';

const ProjectInfo = ({ match }) => (
  <GeneralLayout>
    <ProjectInfoContainer addr={match.params.addr} />
  </GeneralLayout>
);

export default ProjectInfo;
