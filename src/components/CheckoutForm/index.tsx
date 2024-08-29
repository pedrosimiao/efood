import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'

import Button from '../Button'
import { RootReducer } from '../../store'

import { close, clear } from '../../store/reducers/cart'
import { usePurchaseMutation } from '../../services/api'
import { formatPrice, getTotalPrice } from '../../utils'

import * as S from './styles'

interface CheckoutFormProps {
  goBackToPreviousLocation: () => void
}

const CheckoutForm = ({ goBackToPreviousLocation }: CheckoutFormProps) => {
  const { items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const [deliveryFormValidation, setDeliveryFormValidation] = useState(false)

  const [purchase, { data, isSuccess }] = usePurchaseMutation()

  const deliveryFormSchema = Yup.object({
    fullName: Yup.string()
      .min(3, 'O nome deve ter ao menos 3 caractéres')
      .required('O campo é obrigatório'),
    address: Yup.string().required('O campo é obrigatório'),
    city: Yup.string().required('O campo é obrigatório'),
    zipCode: Yup.string()
      .min(9, 'CEP deve ter ao menos 9 caractéres')
      .max(9, 'CEP deve ter no máximo 9 caractéres')
      .required('O campo é obrigatório'),
    addressNumber: Yup.string().required('O campo é obrigatório'),
    addressComplement: Yup.string()
  })

  const paymentFormSchema = Yup.object({
    cardOwner: Yup.string().required('O campo é obrigatório'),
    cardNumber: Yup.string().required('O campo é obrigatório'),
    cardCode: Yup.string().required('O campo é obrigatório'),
    expiresMonth: Yup.string().required('O campo é obrigatório'),
    expiresYear: Yup.string().required('O campo é obrigatório')
  })

  const form = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      city: '',
      zipCode: '',
      addressNumber: '',
      addressComplement: '',
      cardOwner: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object().shape({
      ...deliveryFormSchema.fields,
      ...(deliveryFormValidation ? paymentFormSchema.fields : {})
    }),
    onSubmit: (values) => {
      console.log(values)
      purchase({
        delivery: {
          reciever: values.fullName,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.zipCode,
            number: values.addressNumber,
            complement: values.addressComplement
          }
        },
        payment: {
          card: {
            name: values.cardOwner,
            number: values.cardNumber,
            code: values.cardCode,
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        }))
      })
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  const continuePurchase = () => {
    const isFormValid =
      !checkInputHasError('fullName') &&
      !checkInputHasError('address') &&
      !checkInputHasError('city') &&
      !checkInputHasError('zipCode') &&
      !checkInputHasError('adressNumber') &&
      form.values.fullName.trim() !== '' &&
      form.values.address.trim() !== '' &&
      form.values.city.trim() !== '' &&
      form.values.zipCode.trim() !== '' &&
      form.values.addressNumber.trim() !== ''

    if (isFormValid) {
      setDeliveryFormValidation(true)
    } else {
      alert('Preencha todos os campos de entrega')
    }
  }

  const finishPurchase = () => {
    dispatch(clear())
    dispatch(close())
    navigate('/')
  }

  if (items.length === 0) {
    return <Navigate to={'/'} />
  }

  return (
    <>
      {isSuccess && data ? (
        <>
          <S.Container>
            <h4>Pedido realizado - {data.orderId}</h4>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
              <br />
              <br />
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
              <br />
              <br />
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
              <br />
              <br />
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
            <div className="buttonsContainer">
              <Button
                title="Concluir"
                category="meal"
                type="button"
                onClick={finishPurchase}
              >
                Concluir
              </Button>
            </div>
          </S.Container>
        </>
      ) : (
        <form onSubmit={form.handleSubmit}>
          <S.Container hidden={deliveryFormValidation}>
            <h4>Entrega</h4>
            <S.InputGroup>
              <label htmlFor="fullName">Quem irá receber</label>
              <input
                id="fullName"
                type="text"
                name="fullName"
                value={form.values.fullName}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('fullName') ? 'error' : ''}
              />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="address">Endereço</label>
              <input
                id="address"
                type="text"
                name="address"
                value={form.values.address}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('address') ? 'error' : ''}
              />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="city">Cidade</label>
              <input
                id="city"
                type="text"
                name="city"
                value={form.values.city}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('city') ? 'error' : ''}
              />
            </S.InputGroup>
            <S.Row>
              <S.InputGroup>
                <label htmlFor="zipCode">CEP</label>
                <InputMask
                  id="zipCode"
                  type="text"
                  name="zipCode"
                  value={form.values.zipCode}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('zipCode') ? 'error' : ''}
                  mask="99999-999"
                />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="addressNumber">Número</label>
                <input
                  id="addressNumber"
                  type="text"
                  name="addressNumber"
                  value={form.values.addressNumber}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('addressNumber') ? 'error' : ''}
                />
              </S.InputGroup>
            </S.Row>
            <S.InputGroup>
              <label htmlFor="addressComplement">Complemento (opcional)</label>
              <input
                id="addressComplement"
                type="text"
                name="addressComplement"
                value={form.values.addressComplement}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={
                  checkInputHasError('addressComplement') ? 'error' : ''
                }
              />
            </S.InputGroup>
            <div className="buttonsContainer">
              <Button
                title="Continuar com o pagamento"
                category="meal"
                type="button"
                onClick={continuePurchase}
              >
                Continuar com o pagamento
              </Button>
              <Button
                title="Voltar para o carrinho"
                category="meal"
                type="button"
                onClick={goBackToPreviousLocation}
              >
                Voltar para o carrinho
              </Button>
            </div>
          </S.Container>
          {deliveryFormValidation && (
            <>
              <S.Container hidden={false}>
                <h4>
                  Pagamento - Valor a pagar {formatPrice(getTotalPrice(items))}
                </h4>
                <S.InputGroup>
                  <label htmlFor="cardOwner">Nome no cartão</label>
                  <input
                    id="cardOwner"
                    type="text"
                    name="cardOwner"
                    value={form.values.cardOwner}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cardOwner') ? 'error' : ''}
                  />
                </S.InputGroup>
                <S.Row>
                  <S.InputGroup className="cardNumberInput">
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <InputMask
                      id="cardNumber"
                      type="text"
                      name="cardNumber"
                      value={form.values.cardNumber}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('cardNumber') ? 'error' : ''
                      }
                      mask="9999 9999 9999 9999"
                    />
                  </S.InputGroup>
                  <S.InputGroup className="cvvInput">
                    <label htmlFor="cardCode">CVV</label>
                    <InputMask
                      id="cardCode"
                      type="text"
                      name="cardCode"
                      value={form.values.cardCode}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('cardCode') ? 'error' : ''}
                      mask="999"
                    />
                  </S.InputGroup>
                </S.Row>
                <S.Row>
                  <S.InputGroup>
                    <label htmlFor="expiresMonth">Mês de vencimento</label>
                    <InputMask
                      id="expiresMonth"
                      type="text"
                      name="expiresMonth"
                      value={form.values.expiresMonth}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('expiresMonth') ? 'error' : ''
                      }
                      mask="99"
                    />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="expiresYear">Ano de vencimento</label>
                    <InputMask
                      id="expiresYear"
                      type="text"
                      name="expiresYear"
                      value={form.values.expiresYear}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('expiresYear') ? 'error' : ''
                      }
                      mask="9999"
                    />
                  </S.InputGroup>
                </S.Row>
                <div className="buttonsContainer">
                  <Button
                    title="Finalizar pagamento"
                    category="meal"
                    type="button"
                    onClick={form.handleSubmit}
                  >
                    Finalizar pagamento
                  </Button>
                  <Button
                    title="Voltar para edição de endereço"
                    category="meal"
                    type="button"
                    onClick={() => setDeliveryFormValidation(false)}
                  >
                    Voltar para edição de endereço
                  </Button>
                </div>
              </S.Container>
            </>
          )}
        </form>
      )}
    </>
  )
}

export default CheckoutForm
