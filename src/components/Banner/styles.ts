import styled from 'styled-components'

import {  cores, breakpoints } from '../../styles'

export const Container = styled.div`
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;

  .container {
    position: relative;
    max-width: 1024px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: 32px;
    z-index: 1;
  }

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    content: '';
  }
`
export const Tipo = styled.p`
  color: ${cores.branco};
  font-size: 32px;
  font-weight: 100;
  padding-top: 24px;

  @media (max-width: ${breakpoints.desktop}) {
    padding-left: 24px;
  }
`
export const Titulo = styled.p`
  color: ${cores.branco};
  font-size: 32px;
  font-weight: 900;
  padding-top: 156px;

  @media (max-width: ${breakpoints.desktop}) {
    padding-left: 24px;
  }
`
