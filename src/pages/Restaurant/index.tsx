import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Banner from '../../components/Banner'
import Product from '../../components/Product'
import { RestaurantType } from '../../types'
import restaurantsData from '../../data/restaurants.json'

const RestaurantPage = ({ addToCart }: { addToCart: (item: any) => void }) => {
  const { id } = useParams()
  const [restaurant, setRestaurant] = useState<RestaurantType>()

  useEffect(() => {
    const selectedRestaurant = restaurantsData.find(r => r.id === Number(id))
    setRestaurant(selectedRestaurant)
  }, [id])

  if (!restaurant) return <div>Restaurante não encontrado</div>

  return (
    <>
      <Banner restaurant={restaurant} />
      <div className="container">
        <div className="product-list">
          {restaurant.cardapio.map(product => (
            <Product
              key={product.id}
              onAdd={addToCart}
              {...product}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default RestaurantPage