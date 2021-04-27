import React from 'react';
import classNames from 'classnames';
import Banner from './banner';
import Card from './card';

const ProjectsContainer = () => (
  <div className={classNames('projects-container')}>
    <Banner />
    <div className={classNames('projects-cards-container')}>
      <Card
        addr="0x61429Ed5bd82b8074d1A98023aEe82a4cF6D8322"
        name="R3 Corda 區塊鏈培訓"
        img="sample1"
        price={65300}
        target={72000}
        day={30}
      />
      <Card
        addr="0x869bE608B7a4C468b9d40C397818ED07e7Ff75de"
        name="成大資訊營-終局資戰"
        img="sample2"
        price={25020}
        target={63400}
        day={21}
      />
      <Card
        addr="0xFf1Bd48d673A6E15eDd4AA24603386d60Bc2FDFf"
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
