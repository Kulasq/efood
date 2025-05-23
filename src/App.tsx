import { GlobalCSS } from './styles'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import RestaurantPage from './pages/Restaurant'
import Cart from './components/Cart'

export type CartItem = {
  id: number
  nome: string
  foto: string
  preco: number
}

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [, setOrderId] = useState('')

  const addToCart = (item: CartItem) => {
    setCartItems([...cartItems, item])
    setIsCartOpen(true)
  }

  const removeFromCart = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }


  return (
    <BrowserRouter>
    <GlobalCSS />
    <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: '100vh',
        maxWidth: '100vw',
        overflowX: 'hidden'
      }}>
      <Header 
        cartItemsCount={cartItems.length} 
        onCartClick={() => setIsCartOpen(true)}
      />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/restaurante/:id" 
          element={<RestaurantPage addToCart={addToCart} />} 
        />
      </Routes>
      
      <Footer />
      
      <Cart
  isOpen={isCartOpen}
  items={cartItems}
  onClose={() => setIsCartOpen(false)}
  onRemove={removeFromCart}
  onFinish={(orderId: string) => {
    setOrderId(orderId)
    setCartItems([])
  }}
/>
</div>
    </BrowserRouter>
  )
}

export default App