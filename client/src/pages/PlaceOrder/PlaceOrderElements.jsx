import styled from 'styled-components';

export const Container = styled.div`
  min-height: 65svh;
  display: grid;
  grid-template-rows: 5rem 1fr 8rem;

  grid-template-columns:
    [full-start]
    minmax(4vw, 1fr) [center-start] repeat(
      8,
      [col-start] minmax(min-content, 20rem) [col-end]
    )
    [center-end] minmax(4vw, 1fr) [full-end];
`;

export const Info = styled.div`
  grid-column: 2 / 8;
  grid-row: 2 / auto;
`;

export const Shipping = styled.div`
  padding: 1rem 0;
  border-bottom: 1px solid #919191;
`;
export const Payment = styled.div`
  margin-top: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid #919191;
`;
export const Title = styled.h2`
  font-size: 2.5rem;
`;
export const Address = styled.div`
  display: flex;
  align-items: center;
`;

export const Text = styled.p`
  margin: 1rem 0;
  font-size: 1.3rem;
`;

export const OrderItems = styled.div``;
export const OrderItem = styled.div``;
export const Item = styled.div`
  padding: 1.6rem 0;
  border-bottom: 1px solid #919191;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Image = styled.img`
  height: 6rem;
  width: 6rem;
  border-radius: 1rem;
  cursor: pointer;
`;
export const Name = styled.p`
  font-size: 1.5rem;
  list-style: inline;
  border-bottom: 1px solid #919191;
`;
export const Price = styled.p`
  font-size: 1.5rem;
`;
