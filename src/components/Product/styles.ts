import styled from 'styled-components'
import { cores, breakpoints } from '../../styles'

export const ProductContainer = styled.div`
  background-color: ${cores.vermelho};
  padding: 8px;
  color: ${cores.rosa};
  width: 320px;
  height: 338px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    cursor: pointer;
    transform: scale(1.02);
    transition: all 0.3s ease;
  }
  `

export const ProductImage = styled.img`
  width: 100%;
  height: 167px;
  object-fit: cover;
  flex-shrink: 0;
`

export const ProductTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin: 8px 0;
  height: 40px;
  overflow: hidden;
`

export const ProductDescription = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 8px;
  height: 66px;
  overflow: hidden;
`

export const ProductButton = styled.button`
  background-color: ${cores.rosa};
  color: ${cores.vermelho};
  border: none;
  padding: 4px;
  width: 100%;
  font-weight: bold;
  cursor: pointer;
  flex-shrink: 0;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`

export const ModalContent = styled.div`
  background-color: ${cores.vermelho};
  padding: 32px;
  position: relative;
  z-index: 1;
  display: flex;
  gap: 24px;
  max-width: 1024px;
  width: calc(100% - 48px);
  margin: 0 auto;
  transform: translateX(8px);

  > div {
    color: ${cores.branco};
    flex: 1;

    h3 {
      font-size: 18px;
      margin-bottom: 16px;
      font-weight: 900;
    }

    p {
      font-size: 14px;
      line-height: 22px;
      margin-bottom: 16px;
    }
  }

  .error {
    color: ${cores.rosa};
    font-weight: bold;
    text-align: center;
  }

  ul {
    margin: 16px 0;
    li {
      margin-bottom: 12px;
      padding-bottom: 12px;
      border-bottom: 1px solid ${cores.rosa};
    }
  }

  @media (max-width: ${breakpoints.desktop}) {
    transform: translateX(0px);
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    padding: 24px;
    width: calc(90% - 32px);
    transform: translateX(0px);
  }
`

export const ModalImage = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
  }
`

export const AddButton = styled.button`
  background-color: ${cores.rosa};
  color: ${cores.vermelho};
  border: none;
  padding: 4px 8px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 16px;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: none;
  border: none;
  cursor: pointer;
  display: block;
  height: 16px;
`