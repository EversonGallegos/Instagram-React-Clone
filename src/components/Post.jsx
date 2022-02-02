import React from 'react';
import { BodyPost, ContainerPost, ContentPost, HeaderPost, ImagePost, NamePost } from '../styles/timeline.style';
import imageProfile from '../assets/images/image_profile.jpg'

const Post = () => {
  return (
    <ContainerPost>
      <HeaderPost>
        <ImagePost src={imageProfile}/>
        <NamePost>zezinhodepiraquara</NamePost>
      </HeaderPost>
      <BodyPost>
        <ContentPost src={imageProfile} />
      </BodyPost>
    </ContainerPost>
  )
};

export default Post;
