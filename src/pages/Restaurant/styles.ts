import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 320px);
  gap: 32px;
  justify-content: center;
  max-width: 1024px;
  margin: 56px auto 120px;
  width: 100%;
  padding: 0 16px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: repeat(2, 320px);
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 320px;
    padding: 0 8px;
  }
`