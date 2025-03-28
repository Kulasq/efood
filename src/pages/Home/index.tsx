import RestaurantList from '../../components/RestaurantList'
import restaurantsData from '../../data/restaurants.json'

const Home = () => (
    <RestaurantList restaurants={restaurantsData} />
)

export default Home