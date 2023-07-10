import styled from 'styled-components';

export const Container = styled.div`
  grid-column: 1 / 3;
  grid-row: 1 / -1;
  background-color: #212a3e;
  border-bottom: 1px solid #fff;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 12rem repeat(8, 1fr);
  gap: 1rem;
  position: relative;
`;

export const Avatar = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / 2;
  height: 9rem;
  width: 9rem;
  background-color: #1f8a70;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
