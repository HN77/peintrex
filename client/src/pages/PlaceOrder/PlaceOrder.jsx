/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  Container,
  Info,
  Shipping,
  Payment,
  Title,
  Address,
  Text,
  OrderItems,
  OrderItem,
  Item,
  Image,
  Name,
  Price,
} from './PlaceOrderElements';

const PlaceOrder = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    if (!cart.shippingAddress.address) {
      navigate('/expedition');
    } else if (!cart.paymentMethod) {
      navigate('/paiement');
    }
  }, [cart.shippingAddress.address, cart.paymentMethod, navigate]);

  return (
    <Container>
      <Info>
        <Shipping>
          <Title>Adresse d'expédition</Title>
          <Address>
            <Text>
              {cart.shippingAddress.address}, {cart.shippingAddress.city},
              {cart.shippingAddress.postalCode}, {cart.shippingAddress.country}
            </Text>
          </Address>
        </Shipping>
        <Payment>
          <Title>Mode de paiement</Title>
          <Text>{cart.paymentMethod}</Text>
        </Payment>
        <OrderItems>
          {cart.cartItems.length === 0 ? (
            <Text>Votre panier est vide</Text>
          ) : (
            <OrderItem>
              {cart.cartItems.map((item, index) => (
                <Item key={index}>
                  <Image src={item.image} alt={item.name} />
                  <Name>
                    <Link to={`/produit/${item._id}`}>{item.name}</Link>
                  </Name>
                  <Price>
                    {item.qty} + €{item.price} = €{item.qty * item.price}
                  </Price>
                </Item>
              ))}
            </OrderItem>
          )}
        </OrderItems>
      </Info>
    </Container>
  );
};

export default PlaceOrder;
