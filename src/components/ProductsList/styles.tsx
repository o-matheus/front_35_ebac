import { cores } from '../../styles/styles'
import styled from 'styled-components'
import { Props } from '.'
import { Card } from '../Product/styles'

export const ContainerProducts = styled.section<Omit<Props, 'title'>>`
  padding: 32px 0;
  background-color: ${({ background }) =>
    background === 'black' ? cores.fundoBody : cores.fundoMenuHeader};

  ${Card} {
    background-color: ${({ background }) =>
      background === 'black' ? cores.fundoMenuHeader : cores.fundoBody};
  }
`

export const TitleSection = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 40px;
`

export const ListProducts = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 24px;
`
