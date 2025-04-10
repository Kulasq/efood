import { useState, useEffect } from 'react'
import RestaurantList from '../../components/RestaurantList'

const Home = () => {
  const [restaurants, setRestaurants] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
        
        if (!response.ok) throw new Error('Erro ao carregar restaurantes')
        
        const data = await response.json()
        setRestaurants(data)
      } catch (err) {
        setError('Falha ao carregar lista de restaurantes')
      } finally {
        setLoading(false)
      }
    }

    fetchRestaurants()
  }, [])

  if (loading) return <div>Carregando...</div>
  if (error) return <div>{error}</div>

  return <RestaurantList restaurants={restaurants} />
}

export default Home