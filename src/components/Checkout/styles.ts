import styled from 'styled-components'
import { cores, breakpoints } from '../../styles'

export const CheckoutContainer = styled.div`
  background-color: ${cores.vermelho};
  border-radius: 8px;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  box-sizing: border-box;

  h2 {
    color: ${cores.rosa};
    font-size: 16px;
    margin-bottom: 16px;
    overflow-wrap: break-word;
    font-weight: 700;
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding-top: 16px;
  }
`

export const DeliverySection = styled.div`
  padding-bottom: 16px;
`

export const PaymentSection = styled.div`
  padding-top: 16px;

  
`

export const Section = styled.section`
  margin-bottom: 32px;
`

export const InputGroup = styled.div`
  margin-bottom: 8px;
  font-size: 14px;

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
    background-color: ${cores.rosa}
  }
`

export const Row = styled.div`
  display: flex;
  gap: 34px;
  `
  
  export const RowPay = styled.div`
    display: flex;
    gap: 30px;

  > div:first-child {
    flex: 2;
    min-width: 228px;
  }

  > div:last-child {
    flex: 1; 
    max-width: 87px;
  }
  `

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 24px;
  width: 100%;
`

export const ActionButton = styled.button`
  background-color: ${cores.rosa};
  color: ${cores.vermelho};
  border: none;
  padding: 4px;
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
  padding: 4px;
  font-weight: 700;
  text-decoration: none;
  text-align: center;
  font-size: 14px;
  display: block;
  width: 100%;
  cursor: pointer;
`
