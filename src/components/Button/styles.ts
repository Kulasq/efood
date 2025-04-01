import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../styles'

export const ButtonContainer = styled.button`
  background-color: ${cores.vermelho};
  color: ${cores.rosa};
  border: none;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
`

export const ButtonLink = styled(Link)`
  background-color: ${cores.vermelho};
  color: ${cores.rosa};
  border: none;
  padding: 6px 4px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  width: 82px;
  text-align: center;
  box-sizing: border-box;
  white-space: nowrap;

  &:hover {
    background-color: ${cores.vermelho}CC;
  }
`