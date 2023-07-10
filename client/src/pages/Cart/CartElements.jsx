import styled from 'styled-components';

export const Container = styled.div`
  min-height: 80svh;
  display: grid;
  position: relative;
  grid-template-rows: 6rem 1fr 6rem;

  grid-template-columns:
    [full-start]
    minmax(4vw, 1fr) [center-start] repeat(
      12,
      [col-start] minmax(min-content, 26rem) [col-end]
    )
    [center-end] minmax(4vw, 1fr) [full-end];
  grid-column-gap: 4rem;
`;

export const Content = styled.div`
  grid-column: 2 / 11;
  grid-row: 2 / auto;
`;

export const Text = styled.p`
  font-size: 1.8rem;

  a {
    border-bottom: 1px solid #1f6e8c;
    color: #1f6e8c;
  }
`;

export const Checkout = styled.div`
  grid-column: 11 / 14;
  grid-row: 2 / auto;

  width: 100%;
  color: #5e5e5e;
  padding: 1rem;
  background-color: #eeeeee;
  border-radius: 1rem;
  box-sizing: border-box;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  position: absolute;
`;

export const Qty = styled.div`
  font-size: 1.8rem;
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const TotalPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.8rem;
  padding: 1rem 0;
  border-bottom: 1px solid #c6c6c6;
`;
export const Button = styled.button`
  width: 100%;
  background-color: #000;
  color: #fff;
  padding: 1rem 2rem;
  margin-top: 2rem;
  border-radius: 0.6rem;
  cursor: pointer;

  &:hover {
    background-color: #1e1e1e;
  }
`;
