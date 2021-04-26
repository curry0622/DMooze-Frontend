import React from 'react';
import classNames from 'classnames';
import Banner from './banner';
import Card from './card';

const ProjectsContainer = () => (
  <div className={classNames('projects-container')}>
    <Banner />
    <div className={classNames('projects-cards-container')}>
      <Card
        name="R3 Corda 區塊鏈培訓"
        img="sample1"
        price={65300}
        target={72000}
        day={30}
      />
      <Card
        name="成大資訊營"
        img="sample2"
        price={25020}
        target={63400}
        day={21}
      />
      <Card
        name="Homework Tutor"
        img="sample3"
        price={14310}
        target={125000}
        day={8}
      />
    </div>
  </div>
);

export default ProjectsContainer;
