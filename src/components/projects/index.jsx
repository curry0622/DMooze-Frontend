import React from 'react';
import classNames from 'classnames';
import Banner from './banner';
import Card from './card';

const ProjectsContainer = () => (
  <div className={classNames('projects-container')}>
    <Banner />
    <div className={classNames('projects-cards-container')}>
      <Card />
      <Card />
      <Card />
    </div>
  </div>
);

export default ProjectsContainer;
