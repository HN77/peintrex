/* eslint-disable react/prop-types */
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { Container, Note, Stars, Reviews } from './RatingElements';

const Rating = ({ rating, numReviews }) => {
  return (
    <Container>
      <Note>
        <Stars>
          {rating >= 1 ? (
            <BsStarFill />
          ) : rating >= 0.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </Stars>
        <Stars>
          {rating >= 2 ? (
            <BsStarFill />
          ) : rating >= 1.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </Stars>
        <Stars>
          {rating >= 3 ? (
            <BsStarFill />
          ) : rating >= 2.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </Stars>
        <Stars>
          {rating >= 4 ? (
            <BsStarFill />
          ) : rating >= 3.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </Stars>
        <Stars>
          {rating >= 5 ? (
            <BsStarFill />
          ) : rating >= 4.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </Stars>
      </Note>
      <Reviews>{numReviews} Reviews</Reviews>
    </Container>
  );
};

export default Rating;
