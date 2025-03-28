import { useState } from 'react'
import { IMaskInput } from 'react-imask'
import * as S from './styles'

type Props = {
  totalPrice: number
  onClose: () => void
  onFinish: (orderId: string) => void
}

const Checkout = ({ totalPrice, onClose, onFinish }: Props) => {
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

  return (
    <S.CheckoutContainer>
      <form onSubmit={handleSubmit}>
        <S.Section>
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
        </S.Section>

        <S.Section>
          <h2>Pagamento - Valor total: R$ {totalPrice.toFixed(2)}</h2>

          <S.InputGroup>
            <label>Nome no cartão</label>
            <input
              type="text"
              required
              value={formData.cardName}
              onChange={(e) => setFormData({...formData, cardName: e.target.value})}
            />
          </S.InputGroup>

          <S.Row>
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
          </S.Row>

          <S.Row>
            <S.InputGroup>
              <label>Mês de expiração</label>
              <IMaskInput
                mask="00"
                value={formData.expMonth}
                onAccept={(value) => setFormData({...formData, expMonth: value})}
              />
            </S.InputGroup>

            <S.InputGroup>
              <label>Ano de expiração</label>
              <IMaskInput
                mask="00"
                value={formData.expYear}
                onAccept={(value) => setFormData({...formData, expYear: value})}
              />
            </S.InputGroup>
          </S.Row>
        </S.Section>

        <S.ButtonsContainer>
          <S.SubmitButton type="submit">
            Finalizar pedido
          </S.SubmitButton>
          
          <S.CancelButton type="button" onClick={onClose}>
            Voltar ao carrinho
          </S.CancelButton>
        </S.ButtonsContainer>
      </form>
    </S.CheckoutContainer>
  )
}

export default Checkout