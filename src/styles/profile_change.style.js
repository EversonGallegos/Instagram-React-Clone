import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  a {
    text-decoration: none;
    font-size: 0.8rem;
    margin: 0 0 0 auto;
  }
`

export const ImageProfileChange = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  padding: 1px;
  border: 2px solid #ccc;
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