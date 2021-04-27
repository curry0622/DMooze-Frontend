/* eslint-disable no-unused-vars */
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const ProjectInfoContainer = ({ addr }) => (
  <div className={classNames('project-info-container')}>
    <div className={classNames('project-info-images-container')}>
      <img
        className={classNames('project-info-image')}
        alt="project"
        src={`${process.env.PUBLIC_URL}/projectsPage/sample2.png`}
      />
      <img
        className={classNames('project-info-image')}
        alt="project"
        src={`${process.env.PUBLIC_URL}/projectsPage/sample1.png`}
      />
      <img
        className={classNames('project-info-image')}
        alt="project"
        src={`${process.env.PUBLIC_URL}/projectsPage/sample3.png`}
      />
    </div>
    <div className={classNames('project-info-text-container')}>right</div>
  </div>
);

ProjectInfoContainer.propTypes = {
  addr: PropTypes.string.isRequired,
};

export default ProjectInfoContainer;
