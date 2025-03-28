import { RestaurantType } from '../../types'
import * as S from './styles'

export type Props = {
  restaurant: RestaurantType
}
const Banner = ({ restaurant }: Props) => {
  return (
    <S.Container style={{ backgroundImage: `url(${restaurant.capa})` }}>
        <S.Tipo>{restaurant.tipo}</S.Tipo>
        <S.Titulo>{restaurant.titulo}</S.Titulo>
    </S.Container>
  )
}

export default Banner
