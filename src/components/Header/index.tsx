// src/components/Header/index.tsx
import { Link } from 'react-router-dom'
import * as S from './styles'
import logo from '../../assets/logo.png'
import voltar from '../../assets/de-volta.png'

type Props = {
  cartItemsCount: number
  onCartClick: () => void
}

const Header = ({ cartItemsCount, onCartClick }: Props) => (
  <S.HeaderContainer>
    <div className="container">
      <S.BackLink as={Link} to="/">
        <img src={voltar} alt="Voltar" />
        Restaurantes
      </S.BackLink>
      
      <S.LogoLink as={Link} to="/">
        <img src={logo} alt="EFOOD" />
      </S.LogoLink>

      <S.CartButton onClick={onCartClick}>
        {cartItemsCount} produto(s) no carrinho
      </S.CartButton>
    </div>
  </S.HeaderContainer>
)

export default Header