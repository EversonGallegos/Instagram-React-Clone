import styled from "styled-components/macro";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const ContainerPost = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 5px;
`

export const HeaderPost = styled.div`
  display: flex;
  height: 70px;
  width: 100%;
  align-items: center;
`

export const ImagePost = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin: 0 15px;
`

export const NamePost = styled.h1`
  flex: 1;
  text-align: left;
  font-size: 0.9rem;
  vertical-align: middle;

`

export const BodyPost = styled.div`
  width: 100%;
  height: 600px;
`

export const ContentPost = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`

