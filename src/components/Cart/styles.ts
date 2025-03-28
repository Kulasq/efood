import styled from 'styled-components'
import { cores } from '../../styles'

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  z-index: 1000;

  &.is-open {
    display: flex;
    justify-content: flex-end;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`

export const Sidebar = styled.aside`
  background-color: ${cores.vermelho};
  width: 100%;
  max-width: 360px;
  padding: 32px 8px;
  z-index: 1;
  position: relative;

  .empty-cart {
    color: ${cores.rosa};
    text-align: center;
    font-size: 14px;
  }
`

export const CartItem = styled.li`
  display: flex;
  gap: 8px;
  background-color: ${cores.rosa};
  padding: 8px;
  margin-bottom: 16px;
  position: relative;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  div {
    flex: 1;

    h3 {
      font-size: 16px;
      margin-bottom: 8px;
    }

    span {
      font-size: 14px;
    }
  }

  button {
    background: none;
    border: none;
    color: ${cores.vermelho};
    font-size: 16px;
    cursor: pointer;
    position: absolute;
    right: 8px;
    bottom: 8px;
  }
`

export const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${cores.rosa};
  margin: 24px 0;

  span {
    font-weight: bold;
  }
`

export const CheckoutButton = styled.button`
  background-color: ${cores.rosa};
  color: ${cores.vermelho};
  border: none;
  padding: 4px;
  width: 100%;
  font-weight: bold;
  cursor: pointer;
`