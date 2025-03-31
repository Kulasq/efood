import styled from 'styled-components'
import { cores } from '../../styles'

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.8;
`

export const Sidebar = styled.aside`
  display: flex;
  overflow-y: auto;
  flex-direction: column;
  background-color: ${cores.vermelho};
  z-index: 1;
  padding: 32px 8px 8px 8px;
  max-width: 360px;
  width: 100%;
  position: relative;

  .empty-text {
    font-size: 14px;
    line-height: 22px;
    color: ${cores.branco};
    text-align: center;
  }
`

export const CartItem = styled.li`
  background-color: ${cores.rosa};
  color: ${cores.vermelho};
  display: flex;
  gap: 8px;
  padding: 8px;
  position: relative;
  margin-bottom: 16px;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer;
    position: absolute;
    bottom: 8px;
    right: 8px;
    padding: 4px;

    img {
      width: 16px;
      height: 16px;
    }
  }
`

export const ImageItem = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
`

export const InfosItem = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    font-weight: 900;
    font-size: 18px;
    line-height: 21.09px;
    color: ${cores.vermelho};
    margin-bottom: 8px;
  }

  span {
    font-weight: 400;
    font-size: 14px;
    color: ${cores.vermelho};
  }
`

export const DeleteItemButton = styled.button`
  position: absolute;
  bottom: 8px;
  right: 8px;
  background: none;
  border: none;
  color: ${cores.vermelho};
  cursor: pointer;
  font-size: 16px;
`

export const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${cores.rosa};
  margin: 40px 0 16px 0;
  font-size: 14px;

  span {
    font-weight: bold;
  }

  p {
    font-weight: bold;
  }
`

export const CheckoutButton = styled.button`
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

export const CartStage = styled.div`
  display: block;
  &.is-checkout {
    display: none;
  }
`

export const SubmitCartButton = styled(CheckoutButton)`
  margin-top: 16px;
`