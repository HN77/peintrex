import { useSelector } from 'react-redux';
import { CartItem } from '../../components';
import {
  Container,
  Content,
  Text,
  Checkout,
  Qty,
  TotalPrice,
  Button,
} from './CartElements';
import { Link, useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);

  const navigate = useNavigate();

  const checkoutHandler = () => {
    navigate('/connexion?redirect=/expedition');
  };

  return (
    <Container>
      {cartItems.length === 0 ? (
        <Text>
          Votre panier est vide <Link to='/'>Continuer votre achat...</Link>
        </Text>
      ) : (
        <Content>
          {cartItems.map((item) => (
            <CartItem key={item._id} item={item} />
          ))}
        </Content>
      )}
      <Checkout>
        <Qty>
          <p>Total</p> ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
          articles
        </Qty>
        <TotalPrice>
          <p>Prix</p> €
          {cartItems
            .reduce((acc, item) => acc + item.qty * item.price, 0)
            .toFixed(2)}
        </TotalPrice>
        <Button onClick={checkoutHandler}>Processus de paiement</Button>
      </Checkout>
    </Container>
  );
};

export default Cart;
