import { ButtonContainer, ButtonLink } from './styles'

export type Props = {
  type: 'button' | 'link'
  category: 'restaurant' | 'meal'
  title: string
  to?: string
  onClick?: () => void
  children: string
}

const Button = ({ type, category, title, to, onClick, children }: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer
        type="button"
        category={category}
        title={title}
        onClick={onClick}
      >
        {children}
      </ButtonContainer>
    )
  }

  return (
    <ButtonLink type="link" category={category} title={title} to={to as string}>
      {children}
    </ButtonLink>
  )
}

export default Button
