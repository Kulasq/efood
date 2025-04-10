import { useEffect, useState } from 'react'
import * as S from './styles'
import { priceFormat } from '../../utils'
import close from '../../assets/close.png'

type Props = {
  id: number
  restaurantId: number
  nome: string
  descricao: string
  foto: string
  preco: number
  porcao: string
  onAdd: (item: { id: number; nome: string; foto: string; preco: number }) => void
}

type RestaurantDetails = {
  id: number
  cardapio: Array<{
    id: number
    nome: string
    descricao: string
    foto: string
    preco: number
  }>
}

const Product = ({ id, restaurantId, nome, descricao, foto, preco, porcao, onAdd }: Props) => {
  const [showModal, setShowModal] = useState(false)
  const [restaurantDetails, setRestaurantDetails] = useState<RestaurantDetails | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchRestaurantDetails = async () => {
      if (showModal) {
        setIsLoading(true)
        try {
          const response = await fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${restaurantId}`)
          
          if (!response.ok) throw new Error('Erro ao carregar dados')
          
          const data = await response.json()
          setRestaurantDetails(data)
        } catch (err) {
          setError('Falha ao carregar informações do restaurante')
        } finally {
          setIsLoading(false)
        }
      }
    }

    fetchRestaurantDetails()
  }, [showModal, restaurantId])

  const handleAddToCart = () => {
    onAdd({ id, nome, foto, preco })
    setShowModal(false)
  }

  return (
    <>
      <S.ProductContainer onClick={() => setShowModal(true)}>
        <S.ProductImage src={foto} alt={nome} />
        <S.ProductTitle>{nome}</S.ProductTitle>
        <S.ProductDescription>{descricao}</S.ProductDescription>
        <S.ProductButton>Mais detalhes</S.ProductButton>
      </S.ProductContainer>

      <S.Modal className={showModal ? 'visible' : ''}>
        <S.ModalContent>
          {isLoading && <p>Carregando...</p>}
          
          {error && <p className="error">{error}</p>}
          
          {restaurantDetails && (
            <>
              <S.ModalImage src={foto} alt={nome} />
              <div>
                <h3>{nome}</h3>
                <p>{descricao}</p>
                <p>Serve: {porcao}</p>
                
                <S.AddButton onClick={handleAddToCart}>
                  Adicionar ao carrinho - {priceFormat(preco)}
                </S.AddButton>
              </div>
              <S.CloseButton onClick={() => setShowModal(false)}>
                <img src={close} alt="close" />
              </S.CloseButton>
            </>
          )}
        </S.ModalContent>
        <div className="overlay" onClick={() => setShowModal(false)} />
      </S.Modal>
    </>
  )
}

export default Product