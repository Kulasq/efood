import * as S from './styles'
import Button from '../Button'

type Props = {
  id: number
  titulo: string
  avaliacao: number
  descricao: string
  capa: string
  tipo: string
  destacado: boolean
}

const Restaurant = ({
  id,
  titulo,
  avaliacao,
  descricao,
  capa,
  tipo,
  destacado
}: Props) => (
  <S.RestaurantCard>
    <img src={capa} alt={titulo} />
    <S.TagsContainer>
      {destacado && <S.Tag>Destaque da semana</S.Tag>}
      <S.Tag>{tipo}</S.Tag>
    </S.TagsContainer>
    <S.InfoContainer>
      <S.TitleContainer>
        <h3>{titulo}</h3>
        <div>
          <span>{avaliacao}</span>
          <span>★</span>
        </div>
      </S.TitleContainer>
      <p>{descricao}</p>
      <Button 
        type="link" 
        to={`/restaurante/${id}`}
      >
        Saiba mais
      </Button>
    </S.InfoContainer>
  </S.RestaurantCard>
)

export default Restaurant