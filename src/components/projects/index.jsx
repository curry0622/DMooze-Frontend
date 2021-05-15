import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import Banner from './banner';
import Card from './card';
import getProjectsByPage from '../../apis/getProjectsByPage';

const ProjectsContainer = () => {
  const [projects, setProjects] = useState([]);

  useEffect(async () => {
    let tmp = await getProjectsByPage(2);
    tmp = tmp.map((d) => ({
      id: d.proposal_id,
      name: d.project_name,
      img: d.img_url[0],
      price: d.current_price,
      target: d.target_price,
      day: 25,
    }));
    setProjects(tmp);
  }, []);

  const createCards = projects.map((d) => (
    <Card
      key={d.id}
      id={d.id}
      name={d.name}
      img={d.img || `${process.env.PUBLIC_URL}/projectsPage/sample.png`}
      price={d.price}
      target={d.target}
      day={d.day}
    />
  ));

  return (
    <div className={classNames('projects-container')}>
      <Banner />
      <div className={classNames('projects-cards-container')}>
        {createCards}
      </div>
    </div>
  );
};

export default ProjectsContainer;
