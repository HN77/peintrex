import { ProductItem } from '../../components';
import { useGetProductsQuery } from '../../redux/slices/productApi';
import { Container, Content, Title } from './ProductsElements';

const Products = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();
  return (
    <Container>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <div>{error.data?.messag || error.error}</div>
      ) : (
        <>
          <Title>Produits Exclusifs</Title>
          <Content>
            {products.map((product) => (
              <ProductItem key={product._id} product={product} />
            ))}
          </Content>
        </>
      )}
    </Container>
  );
};

export default Products;
