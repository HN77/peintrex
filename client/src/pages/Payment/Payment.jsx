import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { savePaymentMethod } from '../../redux/slices/cartSlice';
import {
  Container,
  Title,
  Form,
  MethodInfo,
  SubTitle,
  Checkbox,
  Label,
  Radio,
  Button,
} from './PaymentElements';
import { useEffect, useState } from 'react';

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState('PayPal');

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!shippingAddress) {
      navigate('/expedition');
    }
  }, [shippingAddress, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    navigate('/commande');
  };

  return (
    <Container>
      <MethodInfo>
        <Title>Mode de paiement</Title>
        <Form onSubmit={submitHandler}>
          <SubTitle>Sélectionnez le mode de paiement</SubTitle>
          <Checkbox>
            <Radio
              id='PayPal'
              type='radio'
              name='paymentMethod'
              value='PayPal'
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <Label>PayPal or Credit Card</Label>
          </Checkbox>
          <Button type='submit'>Continuer</Button>
        </Form>
      </MethodInfo>
    </Container>
  );
};

export default Payment;
