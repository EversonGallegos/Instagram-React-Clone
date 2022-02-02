import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  align-items: center;
  max-width: 660px;
  width: 100%;  
  margin: 30px 0;
  height: 100px;
  border: 1px solid #DDD;
  border-radius: 5px;
`

export const ContainerStory = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  width: 100%;
  position: relative;
  overflow-x: scroll;
`

export const ImageStory = styled.img`
  width: 65px;
  height: 65px;
  border-radius: 50%;
  margin: 0 5px;
  padding: 1.5px;
  border: 3px solid #f77
`
