import * as S from './styles'

type Props = {
  type?: 'link' | 'button'
  children: string
  to?: string
  onClick?: () => void
}

const Button = ({ type = 'button', children, to, onClick }: Props) => {
  if (type === 'link') {
    return (
      <S.ButtonLink to={to as string}>
        {children}
      </S.ButtonLink>
    )
  }

  return (
    <S.ButtonContainer onClick={onClick}>
      {children}
    </S.ButtonContainer>
  )
}

export default Button