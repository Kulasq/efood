import styled from 'styled-components'
import { cores, breakpoints } from '../../styles'

export const CheckoutContainer = styled.div`
  background-color: ${cores.vermelho};
  padding: 32px;
  border-radius: 8px;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  box-sizing: border-box;

  h2 {
    color: ${cores.rosa};
    font-size: 24px;
    margin-bottom: 16px;
    overflow-wrap: break-word;
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 16px;
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
  flex-direction: column;
  gap: 16px;
  margin-top: 32px;
  width: 100%;
`

export const ActionButton = styled.button`
  background-color: ${cores.rosa};
  color: ${cores.vermelho};
  border: none;
  padding: 12px;
  font-weight: 700;
  text-align: center;
  font-size: 14px;
  width: 100%;
  cursor: pointer;
`

export const BackButton = styled.button`
  background-color: ${cores.rosa};
  color: ${cores.vermelho};
  border: none;
  padding: 12px;
  font-weight: 700;
  text-decoration: none;
  text-align: center;
  font-size: 14px;
  display: block;
  width: 100%;
  cursor: pointer;
`