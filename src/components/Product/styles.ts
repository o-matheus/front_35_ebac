import styled from 'styled-components'
import { cores } from '../../styles/styles'
import { TagContaier } from '../Tag/styles'

export const Card = styled.div`
  position: relative;
  background-color: ${cores.fundoMenuHeader};
  padding: 8px;
  border-radius: 8px;

  ${TagContaier} {
    margin-right: 8px;
  }

  img {
    width: 225px;
    height: 250px;
  }
`

export const TituloCard = styled.h3`
  display: block;
  font-size: 16px;
  font-weight: bold;
  margin-top: 16px;
  margin-bottom: 8px;
`

export const ParagrafoCard = styled.p`
  display: block;
  margin-top: 16px;
  font-size: 14px;
  line-height: 22px;
`

export const InfoCard = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
