import RestaurantList from '../../components/RestaurantList'
import restaurantsData from '../../data/restaurants.json'

const Home = () => (
  <div className="container">
    <RestaurantList restaurants={restaurantsData} />
  </div>
)

export default Home