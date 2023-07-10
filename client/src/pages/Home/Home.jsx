import {
  Menu,
  Header,
  Filter,
  Products,
  Sellers,
  Contact,
} from '../../components';
import { Container } from './HomeElements';

const Home = () => {
  return (
    <Container>
      <Menu />
      <Header />
      <Filter />
      <Products />
      <Sellers />
      <Contact />
    </Container>
  );
};

export default Home;
