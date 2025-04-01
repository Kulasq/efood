import { Link, useLocation } from 'react-router-dom'
import * as S from './styles'
import logo from '../../assets/logo.png'

type Props = {
  cartItemsCount: number
  onCartClick: () => void
}

const Header = ({ cartItemsCount, onCartClick }: Props) => {
  const location = useLocation()

  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <S.HeaderGrid>
          {location.pathname !== '/' && (
            <S.BackLink as={Link} to="/">
              Restaurantes
            </S.BackLink>
          )}

          <S.LogoLink as={Link} to="/">
            <img src={logo} alt="EFOOD" />
          </S.LogoLink>

          {location.pathname !== '/' && (
            <S.CartButton onClick={onCartClick}>
              {cartItemsCount} produto(s) no carrinho
            </S.CartButton>
          )}
        </S.HeaderGrid>

        {location.pathname === '/' && (
          <S.Subtitle>
            Viva experiências gastronômicas{'\n'}
            no conforto da sua casa
          </S.Subtitle>
        )}
      </S.HeaderContent>
    </S.HeaderContainer>
  )
}

export default Header