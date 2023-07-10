import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from '../../redux/slices/cartSlice';
import {
  Container,
  Form,
  Title,
  FormControl,
  Label,
  Input,
  Button,
} from './ShippingElements';

const Shipping = () => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress.address || '');
  const [city, setCity] = useState(shippingAddress.city || '');
  const [postalCode, setPostalCode] = useState(
    shippingAddress.postalCode || ''
  );
  const [country, setCountry] = useState(shippingAddress.country || '');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    navigate('/paiement');
  };
  return (
    <Container>
      <Form onSubmit={submitHandler}>
        <Title>Votre adresse de livraison</Title>
        <FormControl>
          <Label>Adresse</Label>
          <Input
            type='text'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder='Votre adresse'
          />
        </FormControl>
        <FormControl>
          <Label>Ville</Label>
          <Input
            type='text'
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder='Votre ville'
          />
        </FormControl>
        <FormControl>
          <Label>Votre code postal</Label>
          <Input
            type='number'
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            placeholder='Votre code postal'
          />
        </FormControl>
        <FormControl>
          <Label>Pays</Label>
          <Input
            type='text'
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder='Votre pays'
          />
        </FormControl>
        <Button type='submit'>Continuer</Button>
      </Form>
    </Container>
  );
};

export default Shipping;
