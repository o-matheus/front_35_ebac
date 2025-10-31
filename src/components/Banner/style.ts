import styled from 'styled-components'
import banner from '../../assets/images/banner.png'
import { Container } from '../../styles/styles'
import { TagContaier } from '../Tag/styles'

export const Imagem = styled.div`
  width: 100%;
  height: 560px;
  display: block;
  background-image: url(${banner});
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;

  ${Container} {
    position: relative;
    padding-top: 340px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  ${TagContaier} {
    position: absolute;
    top: 32px;
  }
`

export const Titulo = styled.h2`
  font-size: 36px;
  width: 450px;
`

export const Precos = styled.p`
  font-size: 24px;
  margin-top: 24px;

  span {
    text-decoration: line-through;
  }
`
