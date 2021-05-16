import React, { useEffect, useState } from 'react';
import { Button, withStyles } from '@material-ui/core';
import classNames from 'classnames';

import Banner from './banner';
import Card from './card';
import getProjectsByPage from '../../apis/getProjectsByPage';
import getTotalPage from '../../apis/getTotalPage';

const StyledButton = withStyles({
  root: {
    color: '#555',
  },
})(Button);

const ProjectsContainer = () => {
  const [projects, setProjects] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  const [page, setPage] = useState(1);

  useEffect(async () => {
    setTotalPage(await getTotalPage());
  }, []);

  useEffect(async () => {
    let tmp = await getProjectsByPage(page);
    tmp = tmp.map((d) => ({
      id: d.proposal_id,
      name: d.project_name,
      img: d.img_url[0],
      price: d.current_price,
      target: d.target_price,
      day: d.left_time,
    }));
    setProjects(tmp);
  }, [page]);

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
      <div className={classNames('projects-page-container')}>
        <StyledButton
          type="button"
          variant="outlined"
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          上一頁
        </StyledButton>
        <div>
          &nbsp;&nbsp;&nbsp;&nbsp;{page} / {totalPage}&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <StyledButton
          type="button"
          variant="outlined"
          disabled={page === totalPage}
          onClick={() => setPage((prev) => prev + 1)}
        >
          下一頁
        </StyledButton>
      </div>
    </div>
  );
};

export default ProjectsContainer;
