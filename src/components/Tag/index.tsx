import { TagContaier } from './styles'

export type TagProps = {
  size?: 'small' | 'big'
  children: string
}

const Tag = ({ size = 'small', children }: TagProps) => (
  <TagContaier size={size}>{children}</TagContaier>
)

export default Tag
