import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Banner from '../../components/Banner'
import Product from '../../components/Product'
import { RestaurantType } from '../../types'
import { ProductList } from './styles'

const RestaurantPage = ({ addToCart }: { addToCart: (item: any) => void }) => {
  const { id } = useParams()
  const [restaurant, setRestaurant] = useState<RestaurantType>()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const response = await fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
        
        if (!response.ok) throw new Error('Restaurante não encontrado')
        
        const data = await response.json()
        setRestaurant(data)
      } catch (err) {
        setError('Erro ao carregar dados do restaurante')
      } finally {
        setLoading(false)
      }
    }

    fetchRestaurant()
  }, [id])

  if (loading) return <div>Carregando...</div>
  if (error) return <div>{error}</div>
  if (!restaurant) return <div>Restaurante não encontrado</div>

  return (
    <>
      <Banner restaurant={restaurant} />
      
      <ProductList>
        {restaurant.cardapio.map(product => (
          <Product
            key={product.id}
            restaurantId={restaurant.id}
            onAdd={addToCart}
            {...product}
          />
        ))}
      </ProductList>
    </>
  )
}

export default RestaurantPage