import styled from 'styled-components'
import { cores } from '../../styles/styles'

export const ContainerFooter = styled.footer`
  background-color: ${cores.fundoMenuHeader};
  padding: 32px 0;
  font-size: 14px;
`

export const FooterSection = styled.div`
  margin-bottom: 64px;
`

export const SectionTitle = styled.h4`
  font-size: 16px;
  color: ${cores.corTituloFooter};
`
export const Links = styled.ul`
  display: flex;
  margin-top: 16px;
`

export const Link = styled.a`
  color: ${cores.corLinkFooter};
  margin-right: 8px;
`
