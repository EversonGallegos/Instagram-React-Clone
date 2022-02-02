import React from 'react';
import imageProfile from '../assets/images/image_profile.jpg'
import { Container, ContainerSuggested, ContainerNicks, ImageSuggested } from '../styles/suggested_people.style';

const SuggestedPeople = () => {

  const array = [1,2,3,4,5]
  return (
  <Container>
    <h1>Sugestões para você</h1>
    {array.map(() => <ContainerSuggested>
    <ImageSuggested src={imageProfile} />
    <ContainerNicks>
      <h1>zezinhodepiraquara</h1>
      <p>Zezinho de Piraquara</p>
    </ContainerNicks>
    <a href='#'>Seguir</a>
  </ContainerSuggested>)}
  </Container>)
};

export default SuggestedPeople;
