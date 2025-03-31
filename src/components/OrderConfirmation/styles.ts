import styled from 'styled-components'
import { cores } from '../../styles'

export const ConfirmationContainer = styled.div`
  background-color: ${cores.branco};
  padding: 32px;
  border-radius: 8px;
  max-width: 800px;
  width: 90%;
  text-align: center;

  h2 {
    color: ${cores.vermelho};
    font-size: 24px;
    margin-bottom: 24px;
  }
`

export const ConfirmationText = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: ${cores.vermelho};
  margin-bottom: 24px;
`

export const ConfirmationButton = styled.button`
  background-color: ${cores.vermelho};
  color: ${cores.branco};
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 16px;

  &:hover {
    background-color: ${cores.vermelho}CC; /* Adiciona transparência */
  }
`