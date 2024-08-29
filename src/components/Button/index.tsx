import React, { ReactNode } from 'react'

import { ButtonContainer, ButtonLink } from './styles'

export type Props = {
  type: 'button' | 'link'
  category: 'restaurant' | 'meal'
  title: string
  to?: string
  onClick?: () => void
  children: ReactNode
  disabled?: boolean
}

const Button = ({
  type,
  category,
  title,
  to,
  onClick,
  children,
  disabled
}: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer
        type="button"
        category={category}
        title={title}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </ButtonContainer>
    )
  }

  return (
    <ButtonLink
      type="link"
      category={category}
      title={title}
      to={to as string}
      onClick={onClick}
    >
      {children}
    </ButtonLink>
  )
}

export default Button
