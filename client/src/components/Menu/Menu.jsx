import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaLinkedin,
} from 'react-icons/fa';
import { Container, List, Item, Social, Icon } from './MenuElements';

const Menu = () => {
  return (
    <Container>
      <List>
        <Item>Produits</Item>
        <Item>Sellers</Item>
        <Item>Contact</Item>
      </List>
      <Social>
        <Icon>
          <FaFacebookSquare />
        </Icon>
        <Icon>
          <FaTwitterSquare />
        </Icon>
        <Icon>
          <FaInstagramSquare />
        </Icon>
        <Icon>
          <FaLinkedin />
        </Icon>
      </Social>
    </Container>
  );
};

export default Menu;
