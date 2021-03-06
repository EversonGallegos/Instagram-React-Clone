import React from 'react';
import Aside from '../containers/Aside';
import Header from '../containers/Header';
import StoryList from '../containers/StoryList';
import TimeLine from '../containers/TimeLine';
import { ConstainerBody, Container } from '../styles/body.style';

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <ConstainerBody>
          <StoryList />
          <TimeLine />
        </ConstainerBody>
        <Aside />
      </Container>
    </>
  )
};

export default Home;
