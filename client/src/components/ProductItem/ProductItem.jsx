/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { Container, Image } from './ProductItemElements';

const ProductItem = ({ product }) => {
  return (
    <Container>
      <Link to={`/produit/${product._id}`}>
        <Image src={product.image} alt={product.name} />
      </Link>
    </Container>
  );
};

export default ProductItem;
