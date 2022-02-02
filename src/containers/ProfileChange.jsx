import React from 'react';
import imageProfile from '../assets/images/image_profile.jpg'
import { Container, ContainerNicks, ImageProfileChange } from '../styles/profile_change.style';

const ProfileChange = () => {
  return <Container>
    <ImageProfileChange src={imageProfile} />
    <ContainerNicks>
      <h1>zezinhodepiraquara</h1>
      <p>Zezinho de Piraquara</p>
    </ContainerNicks>
    <a href='#'>Mudar</a>
  </Container>;
};

export default ProfileChange;
