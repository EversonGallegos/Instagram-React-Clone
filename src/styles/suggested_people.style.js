import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-top: 20px; 
  flex-direction: column;
  h1{
    font-size: 0.95rem;
    color: #999;
  } 
`

export const ContainerSuggested = styled.div`
  display: flex;
  width: 100%;
  margin-top: 10px;
  align-items: center;
  a {
    text-decoration: none;
    font-size: 0.8rem;
    margin: 0 0 0 auto;
  }
`

export const ImageSuggested = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;

`

export const ContainerNicks = styled.div`
  h1{
    font-size: 0.7rem;
  }
  p{
    font-size: 0.9rem;
  }
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`