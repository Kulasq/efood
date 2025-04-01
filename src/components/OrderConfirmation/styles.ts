import styled from 'styled-components'
import { cores } from '../../styles'

export const ConfirmationContainer = styled.div`
  color: ${cores.amarelo};
  max-width: 800px;
  width: 100%;
  h2 {
    color: ${cores.rosa};
    font-size: 16px;
    margin-bottom: 16px;
    padding-top: 32px;
    font-weight: 700;
  }
`

export const ConfirmationText = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: ${cores.rosa};
  margin-bottom: 24px;
`

export const ConfirmationButton = styled.button`
  background-color: ${cores.rosa};
  color: ${cores.vermelho};
  border: none;
  padding: 4px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  margin-top: 16px;
  width: 100%;

  &:hover {
    background-color: ${cores.rosa}CC;
  }
`