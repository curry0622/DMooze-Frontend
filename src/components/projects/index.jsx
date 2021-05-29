import React, { useEffect, useState } from 'react';
import { Button, withStyles } from '@material-ui/core';
import classNames from 'classnames';

import Banner from './banner';
import Card from './card';
import getProjectsByPage from '../../apis/getProjectsByPage';
import getTotalPage from '../../apis/getTotalPage';
import getEth2Twd from '../../utils/getEth2Twd';

const StyledButton = withStyles({
  root: {
    color: '#555',
  },
})(Button);

const LeftButton = withStyles({
  root: {
    color: '#555',
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    '&:disabled': {
      color: '#fff',
      backgroundColor: '#555',
    },
  },
})(Button);

const RightButton = withStyles({
  root: {
    color: '#555',
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    '&:disabled': {
      color: '#fff',
      backgroundColor: '#555',
    },
  },
})(Button);

const ProjectsContainer = () => {
  const [projects, setProjects] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  const [page, setPage] = useState(1);
  const [expired, setExpired] = useState(false);
  const [exchangeRate, setExchangeRate] = useState(0);

  const createCards = projects.map((d) => (
    <Card
      key={d.id}
      id={d.id}
      name={d.name}
      img={d.img || `${process.env.PUBLIC_URL}/projectsPage/sample.png`}
      price={d.price}
      target={d.target}
      day={d.day}
      exchangeRate={exchangeRate}
    />
  ));

  useEffect(async () => {
    setTotalPage(await getTotalPage(expired));
    setPage(1);
  }, [expired]);

  useEffect(async () => {
    let tmp = await getProjectsByPage(page, expired);
    tmp = tmp.map((d) => ({
      id: d.proposal_id,
      name: d.project_name,
      img: d.img_url[0],
      price: d.current_price,
      target: d.target_price,
      day: d.left_time,
    }));
    setProjects(tmp);
  }, [page, expired]);

  useEffect(async () => setExchangeRate(await getEth2Twd()), []);

  return (
    <div className={classNames('projects-container')}>
      <Banner />
      <div className={classNames('projects-mode-container')}>
        <LeftButton
          onClick={() => setExpired(false)}
          disabled={!expired}
          variant="outlined"
        >
          募款中
        </LeftButton>
        <RightButton
          onClick={() => setExpired(true)}
          disabled={expired}
          variant="outlined"
        >
          已結束
        </RightButton>
      </div>
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
