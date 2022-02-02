import styled from 'styled-components/macro'

export const Container = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #ddd;
  display: flex;
`
export const Wrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`

export const ContainerLogo = styled.div`
  display: flex;
  margin: 0 12px;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
`

export const ContainerSearch = styled.div`
  display: flex; 
  flex: 1 0 330px;
  max-width: 330px;
  margin: 0 12px;
  height: 100%;
  justify-content: center;
  align-items: center;
`

export const ContainerMenu = styled.div`
  display: flex; 
  flex: 1 0 330px;
  max-width: 330px;
  margin: 0 12px;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
`

export const InputSearch = styled.input`
  border: none;
  border-radius: 5px;
  background: #EEE;
  height: 60%;
  outline: none;
  padding-left: 10px;
  flex: 1;
`

export const ImageMenu = styled.img`
  width: 22px;
  height: 22px;
  border-radius: 50%;
`