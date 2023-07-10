import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(1fr);
  grid-row-gap: 3.5rem;
`;
export const Image = styled.img`
  width: 100%;
  grid-row: 1 / 2;
  grid-column: 1 / -1;
  z-index: 1;
  border-radius: 1rem;
  object-fit: cover;
  cursor: pointer;
`;
