import styled from 'styled-components';

export const Container = styled.div`
  grid-column: col-start 2 / col-end 7;
  grid-row: 4 / 5;
  margin-bottom: 8rem;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  grid-gap: 2rem;
  padding: 6rem 0 8rem;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: calc(1.4vw + 2rem);
  margin-top: 5rem;
`;
