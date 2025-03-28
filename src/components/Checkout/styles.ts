import styled from 'styled-components'
import { cores, breakpoints } from '../../styles'

export const CheckoutContainer = styled.div`
  background-color: ${cores.vermelho};
  padding: 32px;
  border-radius: 8px;
  max-width: 800px;
  width: 90%;
  margin: 0 auto;

  h2 {
    color: ${cores.rosa};
    font-size: 24px;
    margin-bottom: 16px;
  }
`

export const Section = styled.section`
  margin-bottom: 32px;
`

export const InputGroup = styled.div`
  margin-bottom: 16px;

  label {
    display: block;
    color: ${cores.rosa};
    margin-bottom: 8px;
    font-weight: bold;
  }

  input {
    width: 100%;
    padding: 8px;
    border: 2px solid ${cores.vermelho};
    border-radius: 4px;
  }
`

export const Row = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 32px;
  margin-right: 8px;
`

export const SubmitButton = styled.button`
  background-color: ${cores.vermelho};
  color: ${cores.branco};
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  flex: 1;

  &:hover {
    background-color: ${cores.vermelho}CC;
  }
`

export const CancelButton = styled.button`
  background-color: ${cores.rosa};
  color: ${cores.vermelho};
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: ${cores.rosa}CC;
  }
`