import styled from 'styled-components'
import { cores, breakpoints } from '../../styles'
import { Link } from 'react-router-dom'
import fundoHero from '../../assets/fundoHero.png'

export const HeaderContainer = styled.header`
  background-image: url(${fundoHero});
  background-size: cover;
  background-position: center;
  padding: 40px 0;
  position: relative;
  `

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

export const HeaderGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 16px;
  width: 100%;
`

export const BackLink = styled(Link)`
  color: ${cores.vermelho};
  font-size: 18px;
  font-weight: 900;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  justify-self: start;
`

export const LogoLink = styled(Link)`
grid-column: 2;
  img {
    width: 125px;
    height: 57px;
    display: block;
  }
`

export const Subtitle = styled.p`
  color: ${cores.vermelho};
  font-size: 36px;
  text-align: center;
  white-space: pre-wrap;
  max-width: 600px;
  font-weight: 900;
  margin-top: 140px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 24px;
    padding: 0 16px;
    margin-top: 80px;
  }
`

export const CartButton = styled.button`
  color: ${cores.vermelho};
  font-size: 18px;
  background: none;
  border: none;
  font-weight: 900;
  cursor: pointer;
  padding: 8px;
  justify-self: end;
  margin-left: auto
`