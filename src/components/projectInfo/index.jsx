import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const ProjectInfoContainer = ({ addr }) => (
  <div className={classNames('project-info-container')}>{addr}</div>
);

ProjectInfoContainer.propTypes = {
  addr: PropTypes.string.isRequired,
};

export default ProjectInfoContainer;
