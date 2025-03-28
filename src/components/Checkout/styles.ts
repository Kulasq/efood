import styled from 'styled-components'
import { cores, breakpoints } from '../../styles'
import { fadeIn } from '../../styles/animations'

export const CheckoutContainer = styled.div`
  background-color: ${cores.branco};
  padding: 32px;
  border-radius: 8px;
  width: 100%;
  animation: ${fadeIn} 0.3s ease-in;

  h2 {
    color: ${cores.vermelho};
    font-size: 24px;
    margin-bottom: 16px;
  }
`

export const DeliverySection = styled.div`
  padding-bottom: 32px;
`

export const PaymentSection = styled.div`
  padding-top: 32px;
`

export const Section = styled.section`
  margin-bottom: 32px;
`

export const InputGroup = styled.div`
  margin-bottom: 16px;

  label {
    display: block;
    color: ${cores.vermelho};
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
  flex-direction: column;

  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
  }
`

export const ActionButton = styled.button`
  background-color: ${cores.vermelho};
  color: ${cores.branco};
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  flex: 1;
  transition: all 0.3s;

  &:hover {
    background-color: ${cores.vermelho};
  }
`

export const BackButton = styled.button`
  background-color: transparent;
  color: ${cores.vermelho};
  border: 2px solid ${cores.vermelho};
  padding: 12px 24px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s;

  &:hover {
    background-color: ${cores.vermelho}11;
  }
`