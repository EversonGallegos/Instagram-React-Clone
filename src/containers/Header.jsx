import React from 'react';
import Logo from '../components/Logo';
import Menu from '../components/Menu';
import Search from '../components/Search';
import { Wrapper, Container } from '../styles/header.style';

const Header = () => {
  return (
  <Container>
    <Wrapper>
      <Logo />
      <Search />
      <Menu />
    </Wrapper>
    </Container>
  )
}

export default Header;
