import styled from 'styled-components'
import { cores } from '../../styles/styles'
import { TagProps } from '.'

export const TagContaier = styled.div<TagProps>`
  display: inline-block;
  background-color: ${cores.fundoTag};
  color: ${cores.textoPrimaria};
  font-size: ${(tagProps) => (tagProps.size === 'big' ? '16px' : '10px')};
  font-weight: bold;
  padding: ${(tagProps) => (tagProps.size === 'big' ? '8px 16px' : '4px 8px')};
  border-radius: 8px;
`
