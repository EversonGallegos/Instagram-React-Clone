import React from 'react';
import { Container, ContainerStory, ImageStory } from '../styles/story.style';
import imageProfile from '../assets/images/image_profile.jpg'

const StoryList = () => {
  const array = [1,2,3,4,5, 6, 7, 8, 9, 0, 1, 2]
  return (
  <Container>
    <ContainerStory>
    {
      array.map(() => <ImageStory src={imageProfile} />)
    }
    </ContainerStory>
  </Container>)
};

export default StoryList;
