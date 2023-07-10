/* eslint-disable react/prop-types */
import { BsXSquare } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../../redux/slices/cartSlice';
import {
  Container,
  Image,
  Name,
  Count,
  Select,
  Option,
  Trash,
} from './CartItemElements';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const addToCartHandler = async (product, qty) => {
    dispatch(addToCart({ ...product, qty }));
  };

  const removeFromCartHandler = async (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <Container>
      <Image src={item.image} alt={item.name} />
      <Name>
        <Link to={`/produit/${item._id}`}>{item.name}</Link>
      </Name>
      <Count>
        <Select
          value={item.qty}
          onChange={(e) => addToCartHandler(item, Number(e.target.value))}
        >
          {[...Array(item.countInStock).keys()].map((x) => (
            <Option key={x + 1} value={x + 1}>
              {x + 1}
            </Option>
          ))}
        </Select>
      </Count>
      <Trash onClick={() => removeFromCartHandler(item._id)}>
        <BsXSquare />
      </Trash>
    </Container>
  );
};

export default CartItem;
