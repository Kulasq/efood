import styled from 'styled-components'
import { cores, breakpoints } from '../../styles'

export const ProductContainer = styled.div`
  background-color: ${cores.vermelho};
  padding: 8px;
  color: ${cores.rosa};
  max-width: 320px;
  width: 100%;
  margin: 0 auto;

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
`

export const ProductTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin: 8px 0;
`

export const ProductDescription = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 8px;
  min-height: 88px;
`

export const ProductButton = styled.button`
  background-color: ${cores.rosa};
  color: ${cores.vermelho};
  border: none;
  padding: 4px;
  width: 100%;
  font-weight: bold;
  cursor: pointer;
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
  width: 100%;
  margin: 0 24px;

  > div {
    color: ${cores.branco};

    h3 {
      font-size: 24px;
      margin-bottom: 16px;
    }

    p {
      font-size: 14px;
      line-height: 22px;
      margin-bottom: 16px;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    padding: 16px;
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
  padding: 8px 16px;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  margin-top: 16px;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: none;
  border: none;
  color: ${cores.branco};
  font-size: 24px;
  cursor: pointer;
`