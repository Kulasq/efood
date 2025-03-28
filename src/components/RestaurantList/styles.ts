import styled from 'styled-components'
import { cores, breakpoints } from '../../styles'

export const Container = styled.div`
  padding: 56px 0 120px;
  background-color: ${cores.fundoClaro};
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(472px, 1fr));
  gap: 48px;
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`