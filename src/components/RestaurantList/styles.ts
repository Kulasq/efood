import styled from 'styled-components'
import { cores, breakpoints } from '../../styles'

export const Container = styled.div`
  padding: 56px 0 120px;
  background-color: ${cores.fundoClaro};
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
  width: 100%;
  max-width: 100%;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`