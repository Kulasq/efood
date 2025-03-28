import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'
import fundoHero from '../../assets/fundoHero.png'

export const HeaderContainer = styled.header`
  background-image: url(${fundoHero});
  background-size: cover;
  padding: 40px 0;

  .container {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    max-width: 1024px;
    margin: 0 auto;
    padding: 0 20px;
  }
`

export const BackLink = styled(Link)`
  color: ${cores.vermelho};
  font-weight: bold;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
`

export const LogoLink = styled(Link)`
grid-column: 2;
  img {
    width: 125px;
    height: 57px;
    display: block;
  }
`

export const CartButton = styled.button`
  justify-self: end;
  color: ${cores.vermelho};
  background: none;
  border: none;
  font-weight: bold;
  cursor: pointer;
  padding: 8px;
`