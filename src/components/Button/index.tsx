import { ButtonContainer } from './style'
import { Link } from 'react-router-dom'

type ButtonProps = {
  type: 'button' | 'link'
  title?: string
  to?: string
  onClick?: () => void
  children: string
}

const Button = ({ type, title, to, onClick, children }: ButtonProps) => {
  if (type === 'button') {
    return (
      <ButtonContainer onClick={onClick} type="button" title={title}>
        {children}
      </ButtonContainer>
    )
  } else {
    return (
      <ButtonContainer title={title} as={Link} to={to as string}>
        {children}
      </ButtonContainer>
    )
  }
}

export default Button
