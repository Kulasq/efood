import styled from 'styled-components'
import { cores } from '../../styles'

export const RestaurantCard = styled.div`
  background-color: ${cores.branco};
  border: 1px solid ${cores.vermelho};
  position: relative;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 217px;
    object-fit: cover;
  }
`

export const TagsContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`

export const Tag = styled.span`
  background-color: ${cores.vermelho};
  color: ${cores.rosa};
  font-size: 12px;
  font-weight: bold;
  padding: 6px 10px;
`

export const InfoContainer = styled.div`
  padding: 8px;
  color: ${cores.vermelho};

  p {
    font-size: 14px;
    line-height: 22px;
    margin: 16px 0;
    min-height: 110px;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    height: 21px;
    gap: 8px;
  }

  div {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 700;
    font-size: 18px;
  }
`