import Restaurant from '../Restaurant'
import { Container, List } from './styles'

type Props = {
  restaurants: Array<{
    id: number
    titulo: string
    destacado: boolean
    tipo: string
    avaliacao: number
    descricao: string
    capa: string
    cardapio: Array<{
      id: number
      nome: string
      descricao: string
      foto: string
      preco: number
      porcao: string
    }>
  }>
}

const ProductList = ({ restaurants }: Props) => (
  <Container>
    <List>
      {restaurants.map((restaurant) => (
        <Restaurant
          key={restaurant.id}
          id={restaurant.id}
          titulo={restaurant.titulo}
          destacado={restaurant.destacado}
          tipo={restaurant.tipo}
          avaliacao={restaurant.avaliacao}
          descricao={restaurant.descricao}
          capa={restaurant.capa}
        />
      ))}
    </List>
  </Container>
)

export default ProductList