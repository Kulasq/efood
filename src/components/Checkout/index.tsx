import { useState } from 'react'
import { IMaskInput } from 'react-imask'
import * as S from './styles'
import { priceFormat } from '../../utils'

type Props = {
  step: 'delivery' | 'payment'
  totalPrice: number
  onBack: () => void
  onClose: () => void
  onFinish: (orderId: string) => void
}

const Checkout = ({ step, totalPrice, onBack, onClose, onFinish }: Props) => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    zipCode: '',
    number: '',
    complement: '',
    cardName: '',
    cardNumber: '',
    cvv: '',
    expMonth: '',
    expYear: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const orderId = `ORDER-${Math.random().toString(36).substr(2, 6).toUpperCase()}`
    onFinish(orderId)
  }

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (step === 'delivery') {
      if (
        formData.name.trim() &&
        formData.address.trim() &&
        formData.city.trim() &&
        formData.zipCode.trim() &&
        formData.number.trim()
      ) {
        onFinish('')
      }
    } else {
      handleSubmit(e)
    }
  }

  return (
    <S.CheckoutContainer>
      <form onSubmit={handleContinue}>
        {step === 'delivery' && (
          <S.DeliverySection>
            <h2>Entrega</h2>
            
            <S.InputGroup>
              <label>Quem irá receber</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </S.InputGroup>

            <S.InputGroup>
              <label>Endereço</label>
              <input
                type="text"
                required
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
              />
            </S.InputGroup>

            <S.InputGroup>
              <label>Cidade</label>
              <input
                type="text"
                required
                value={formData.city}
                onChange={(e) => setFormData({...formData, city: e.target.value})}
              />
            </S.InputGroup>

            <S.Row>
              <S.InputGroup>
                <label>CEP</label>
                <IMaskInput
                  mask="00.000-000"
                  value={formData.zipCode}
                  onAccept={(value) => setFormData({...formData, zipCode: value})}
                />
              </S.InputGroup>

              <S.InputGroup>
                <label>Número</label>
                <input
                  type="number"
                  required
                  value={formData.number}
                  onChange={(e) => setFormData({...formData, number: e.target.value})}
                />
              </S.InputGroup>
            </S.Row>

            <S.InputGroup>
              <label>Complemento (opcional)</label>
              <input
                type="text"
                value={formData.complement}
                onChange={(e) => setFormData({...formData, complement: e.target.value})}
              />
            </S.InputGroup>

            <S.ButtonsContainer>
              <S.ActionButton type="submit">
                Continuar para Pagamento
              </S.ActionButton>
              <S.BackButton type="button" onClick={onBack}>
                Voltar para Carrinho
              </S.BackButton>
            </S.ButtonsContainer>
          </S.DeliverySection>
        )}

        {step === 'payment' && (
          <S.PaymentSection>
            <h2>Pagamento - Valor total: {priceFormat(totalPrice)}</h2>

            <S.InputGroup>
              <label>Nome no cartão</label>
              <input
                type="text"
                required
                value={formData.cardName}
                onChange={(e) => setFormData({...formData, cardName: e.target.value})}
              />
            </S.InputGroup>

            <S.RowPay>
              <S.InputGroup>
                <label>Número do cartão</label>
                <IMaskInput
                  mask="0000 0000 0000 0000"
                  value={formData.cardNumber}
                  onAccept={(value) => setFormData({...formData, cardNumber: value})}
                />
              </S.InputGroup>

              <S.InputGroup>
                <label>CVV</label>
                <IMaskInput
                  mask="000"
                  value={formData.cvv}
                  onAccept={(value) => setFormData({...formData, cvv: value})}
                />
              </S.InputGroup>
            </S.RowPay>

            <S.Row>
              <S.InputGroup>
                <label>Mês de vencimento</label>
                <IMaskInput
                  mask="00"
                  value={formData.expMonth}
                  onAccept={(value) => setFormData({...formData, expMonth: value})}
                />
              </S.InputGroup>

              <S.InputGroup>
                <label>Ano de vencimento</label>
                <IMaskInput
                  mask="00"
                  value={formData.expYear}
                  onAccept={(value) => setFormData({...formData, expYear: value})}
                />
              </S.InputGroup>
            </S.Row>

            <S.ButtonsContainer>
              <S.ActionButton type="submit">
                Finalizar Pedido
              </S.ActionButton>
              <S.BackButton type="button" onClick={onBack}>
                Voltar para Entrega
              </S.BackButton>
            </S.ButtonsContainer>
          </S.PaymentSection>
        )}
      </form>
    </S.CheckoutContainer>
  )
}

export default Checkout