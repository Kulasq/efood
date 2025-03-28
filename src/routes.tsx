import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import RestaurantPage from './pages/Restaurant'

const Rotas = (props: any) => (
  <Routes>
    <Route path="/" element={<Home {...props} />} />
    <Route path="/restaurante/:id" element={<RestaurantPage {...props} />} />
  </Routes>
)

export default Rotas