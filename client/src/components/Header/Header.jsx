/* eslint-disable react/no-unescaped-entities */
import Video from '../../assets/videos/bg-video4.mp4';
import ImageA from '../../assets/images/img-1.jpg';
import ImageB from '../../assets/images/img-2.jpg';
import ImageC from '../../assets/images/img-3.jpg';
import {
  Container,
  Title,
  Text,
  Button,
  Galerie,
  HeroBg,
  VideoBg,
  ImgA,
  ImgB,
  ImgC,
} from './HeaderElements';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Container>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <Title>
        <Text>
          Le meilleur site pour mettre en relation des artistes talentueux avec
          des amoureux d'œuvre d'art.
        </Text>
        <Button>
          <Link to='/'>Savoir plus...</Link>
        </Button>
      </Title>
      <Galerie>
        <ImgA src={ImageA} alt='Image hero' />
        <ImgB src={ImageB} alt='Image hero' />
        <ImgC src={ImageC} alt='Image hero' />
      </Galerie>
    </Container>
  );
};

export default Header;
