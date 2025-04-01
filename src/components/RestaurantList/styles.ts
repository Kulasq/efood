import styled from 'styled-components'
import { cores, breakpoints } from '../../styles'

export const Container = styled.div`
  padding: 56px 0 120px;
  background-color: ${cores.fundoClaro};
  max-width: 1024px;
  margin: 0 auto;

  @media (max-width: ${breakpoints.desktop}) {
    padding: 56px 24px 120px;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 472px);
  justify-content: center;
  column-gap: 80px;
  row-gap: 48px;
  width: 100%;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr;
    max-width: 472px;
    margin: 0 auto;
    gap: 32px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 100%;
    padding: 0 16px;
  }
`