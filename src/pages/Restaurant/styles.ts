import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
  padding: 0 20px;
  width: 100%;
  margin: 56px 0 120px;

  @media (max-width: ${breakpoints.desktop}) {
    padding: 0;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`