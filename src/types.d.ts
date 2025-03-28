export type RestaurantType = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: ProductType[]
}

export type ProductType = {
  id: number
  nome: string
  descricao: string
  foto: string
  preco: number
  porcao: string
}