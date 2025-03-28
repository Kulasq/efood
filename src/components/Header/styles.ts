// src/components/Header/styles.ts
import styled from 'styled-components'
import { cores, breakpoints } from '../../styles'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.header`
  background-image: url('../../assets/fundoHero.png');
  background-size: cover;
  padding: 40px 0;

  .container {
    max-width: 1024px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
  img {
    width: 125px;
    height: 57px;
  }
`

export const CartButton = styled.button`
  color: ${cores.vermelho};
  background: none;
  border: none;
  font-weight: bold;
  cursor: pointer;
  padding: 8px;
`