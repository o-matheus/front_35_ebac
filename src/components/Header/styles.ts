import styled from 'styled-components'
import { cores } from '../../styles/styles'

export const HeaderBar = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: ${cores.fundoMenuHeader};
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;
  a {
    color: ${cores.textoPrimaria};
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;
  }
`

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
`

export const LinkItem = styled.li`
  margin-right: 16px;
`

export const LinkCart = styled.a`
  display: flex;
  align-items: center;
  justify-content: end;

  img {
    margin-left: 16px;
  }
`
