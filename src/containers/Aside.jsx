import React from 'react';
import { Container } from '../styles/aside.style';
import ProfileChange from './ProfileChange';
import SuggestedPeople from './SuggestedPeople';

const Aside = () => {
  return (<Container>
    <ProfileChange />
    <SuggestedPeople />
  </Container>)
};

export default Aside;
