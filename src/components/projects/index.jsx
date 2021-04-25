import React from 'react';
import classNames from 'classnames';
import Banner from './banner';

const ProjectsContainer = () => (
  <div className={classNames('projects-container')}>
    {/* <div className={classNames('projects-person-img-container')}>
      <img
        className={classNames('projects-person-img')}
        alt="person"
        src={`${process.env.PUBLIC_URL}/projectsPage/left.png`}
      />
      <img
        className={classNames('projects-person-img')}
        alt="person"
        src={`${process.env.PUBLIC_URL}/projectsPage/mid.png`}
      />
      <img
        className={classNames('projects-person-img')}
        alt="person"
        src={`${process.env.PUBLIC_URL}/projectsPage/right.png`}
      />
    </div> */}
    <Banner />
  </div>
);

export default ProjectsContainer;
