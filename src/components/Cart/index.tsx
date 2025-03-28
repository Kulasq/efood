import { useState } from 'react'
import * as S from './styles'
import Checkout from '../Checkout'
import OrderConfirmation from '../OrderConfirmation'
import { priceFormat } from '../../utils'

type Props = {
  isOpen: boolean
  items: Array<{
    id: number
    nome: string
    foto: string
    preco: number
  }>
  onClose: () => void
  onRemove: (id: number) => void
  onFinish: (orderId: string) => void
}

const Cart = ({ isOpen, items, onClose, onRemove, onFinish }: Props) => {
  const [step, setStep] = useState<'cart' | 'delivery' | 'payment' | 'confirmation'>('cart')
  const [orderId, setOrderId] = useState('')
  const total = items.reduce((acc, item) => acc + item.preco, 0)

  const handleFinishOrder = (orderId: string) => {
    if (orderId) {
      onFinish(orderId)
      setOrderId(orderId)
      setStep('confirmation')
    } else {
      setStep('payment')
    }
  }

  const handleClose = () => {
    setStep('cart')
    onClose()
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={handleClose} />
      <S.Sidebar>
        {step === 'cart' && (
          <>
            <ul>
              {items.map((item) => (
                <S.CartItem key={item.id}>
                  <img src={item.foto} alt={item.nome} />
                  <div>
                    <h3>{item.nome}</h3>
                    <span>{priceFormat(item.preco)}</span>
                  </div>
                  <button onClick={() => onRemove(item.id)}>×</button>
                </S.CartItem>
              ))}
            </ul>
            
            <S.TotalPrice>
              <p>Valor total</p>
              <span>{priceFormat(total)}</span>
            </S.TotalPrice>

            <S.CheckoutButton onClick={() => setStep('delivery')}>
              Continuar com a entrega
            </S.CheckoutButton>
          </>
        )}

        {(step === 'delivery' || step === 'payment') && (
          <Checkout
            step={step}
            totalPrice={total}
            onBack={() => step === 'delivery' ? setStep('cart') : setStep('delivery')}
            onClose={handleClose}
            onFinish={handleFinishOrder}
          />
        )}

        {step === 'confirmation' && (
          <OrderConfirmation
            orderId={orderId}
            onClose={handleClose}
          />
        )}
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart