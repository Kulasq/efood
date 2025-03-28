import * as S from './styles'

type Props = {
  orderId: string
  onClose: () => void
}

const OrderConfirmation = ({ orderId, onClose }: Props) => (
  <S.ConfirmationContainer>
    <h2>Pedido realizado - {orderId}</h2>
    <S.ConfirmationText>
      Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.
    </S.ConfirmationText>
    <S.ConfirmationText>
      Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.
    </S.ConfirmationText>
    <S.ConfirmationText>
      Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.
    </S.ConfirmationText>
    <S.ConfirmationText>
      Esperamos que desfrute de uma deliciosa experiência gastronômica!
    </S.ConfirmationText>
    <S.ConfirmationButton onClick={onClose}>
      Concluir
    </S.ConfirmationButton>
  </S.ConfirmationContainer>
)

export default OrderConfirmation