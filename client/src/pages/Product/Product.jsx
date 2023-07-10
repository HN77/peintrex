import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetProductDetailsQuery } from '../../redux/slices/productApi';
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
} from 'react-icons/io';
import { Rating } from '../../components';
import { addToCart } from '../../redux/slices/cartSlice';
import {
  Container,
  Content,
  Image,
  Img,
  Info,
  Action,
  Name,
  Price,
  Span,
  Share,
  Desc,
  Bold,
  Status,
  Button,
  Success,
  Error,
  Count,
  Qty,
  Select,
  Option,
} from './ProductElements';

const Product = () => {
  const [qty, setQty] = useState(1);
  const { id: productId } = useParams();

  const {
    data: product,
    isLoading,
    error,
  } = useGetProductDetailsQuery(productId);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart({ ...product, qty }));
    navigate(`/cart`);
    // navigate(`/cart/${productId}?qty=${qty}`);
  };

  return (
    <Container>
      {isLoading ? (
        'loading'
      ) : error ? (
        'error'
      ) : (
        <Content>
          <Image>
            <Img src={product.image} alt={product.name} />
          </Image>
          <Info>
            <Name>{product.name}</Name>
            <Rating rating={product.rating} numReviews={product.numReviews} />
            <Desc>
              <Bold>Description </Bold> {product.description}
            </Desc>
            <Share>
              Partager
              <Span>
                <IoLogoFacebook />
                <IoLogoInstagram />
                <IoLogoLinkedin />
                <IoLogoTwitter />
              </Span>
            </Share>
          </Info>
          <Action>
            <Price>
              <Span>Price </Span> €{product.price}
            </Price>
            <Status>
              Status
              {product.countInStock > 0 ? (
                <Success>In stock</Success>
              ) : (
                <Error>Unavailable</Error>
              )}
            </Status>
            {product.countInStock > 0 && (
              <>
                <Count>
                  <Qty>Quantity</Qty>
                  <Select
                    value={qty}
                    onChange={(e) => setQty(Number(e.target.value))}
                  >
                    {[...Array(product.countInStock).keys()].map((x) => (
                      <Option key={x + 1} value={x + 1}>
                        {x + 1}
                      </Option>
                    ))}
                  </Select>
                </Count>
                <Button
                  onClick={addToCartHandler}
                  disabled={product.countInStock === 0}
                >
                  Ajouter au panier
                </Button>
              </>
            )}
          </Action>
        </Content>
      )}
    </Container>
  );
};

export default Product;
